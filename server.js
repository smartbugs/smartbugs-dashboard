const express = require('express');
const fs = require('fs')
const PyShell = require('python-shell');
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static');
const formidable = require('formidable')

let app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;

app.post('/dataset-analysis', async (req, res) => {
  try{
    res.setTimeout(10 * 60 * 1000, function(){
      console.log('Request has timed out.');
         res.send(408);
      });
      
    const tools = req.body.tools
    const dataset = req.body.dataset

    var options = {
        args: ['--tool', tools, '--dataset', dataset]
      };
      
    let results = fs.readFileSync(__dirname + '/smartbugs/results.json');

    let pyshell = new PyShell.PythonShell(__dirname + '/smartbugs/smartBugs.py', options);

    console.log("Received Request: ", options.args);

    pyshell.on('message', function(message) {
          console.log("Received", message);
    });
      
    pyshell.end(async (err, code, signal) => {
        if (err) throw err;
        let results = await fs.readFileSync(__dirname + '/smartbugs/results.json');
        res.send(results)
    });
  }catch(err){
    res.status(400).json({ error: 'Something went wrong!' })
  }
})

app.post('/input-file-analysis', async (req, res) => {
  try{
    res.setTimeout(10 * 60 * 1000, function(){
        console.log('Request has timed out.');
           res.send(408);
        });
    
    const tools = req.body.tools
    const contract = req.body.file
    await fs.writeFileSync(__dirname + '/smartbugs/toAnalyze/toAnalyze.sol', contract)

    const options = {
        args: ['--tool', ...tools, '--file', __dirname + '/smartbugs/toAnalyze/toAnalyze.sol']
      };
    
    let results = fs.readFileSync(__dirname + '/smartbugs/results.json');

    let pyshell = new PyShell.PythonShell(__dirname + '/smartbugs/smartBugs.py', options);

    console.log("Received Request: ", options.args);

    pyshell.on('message', function(message) {
          console.log("Received", message);
    });
      
    pyshell.end(async (err, code, signal) => {
        if (err) throw err;
        let results = await fs.readFileSync(__dirname + '/smartbugs/results.json');
        res.send(results)
    });
  }catch(err){
    res.status(400).json({ error: 'Something went wrong!' })
  }
})

app.post('/imported-file-analysis', async (req, res) => {
  try{
    let tools
    res.setTimeout(10 * 60 * 1000, function(){
      console.log('Request has timed out.');
         res.send(408);
      });

    const form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/smartbugs/toAnalyze/toAnalyze.sol';
    });

    form.on('field', function(name, value) {
      if(name == 'tools') {
        tools = value
      }
    });

    form.on('file', async function (name, file){
    
        console.log('Uploaded ' + file.name);
   
        const options = {
            args: ['--tool', ...tools.split(','), '--file', __dirname + '/smartbugs/toAnalyze/toAnalyze.sol']
          };
        
        let results = fs.readFileSync(__dirname + '/smartbugs/results.json');

        let pyshell = new PyShell.PythonShell(__dirname + '/smartbugs/smartBugs.py', options);

        console.log("Received Request: ", options.args);

        pyshell.on('message', function(message) {
              console.log("Received", message);
        });
          
        pyshell.end(async (err, code, signal) => {
            if (err) throw err;
            let results = await fs.readFileSync('smartbugs/results.json');
            res.send(results)
        });
    });
  }catch(err){
    res.status(400).json({ error: 'Something went wrong!' })
  }
})

app.listen(port, () => {
  console.log('SmartBugs running at:' + '\n' +
    '- Local:   http://localhost:'+ port + '/' + '\n'
    + '- Network: http://192.168.1.120:' + port + '/' + '\n'
  )
});