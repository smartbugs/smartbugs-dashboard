<template>
  <div>
    <card md11 v-if="!analysis && !analysing">
      <form>
        <div>
          <base-input class="col-md-12">
            <center>
              <h4 class="text-danger">Select a Dataset</h4>
            </center>
            <select id="dataset" class="form-control">
              <option selected>Choose a Dataset</option>
              <option
                simple
                v-for="(dataset, index) in datasets"
                :key="index"
                @click="selectDataset(index)"
              >{{ dataset }}</option>
            </select>
          </base-input>
          <br />
          <div class="form-group">
            <center>
              <h4 class="text-danger">Select the tools</h4>
              <base-button
                simple
                v-for="(tool, index) in tools"
                :key="index"
                @click="selectTools(index)"
                v-bind:type="selectedTools.includes(tools[index]) ? `primary` : `success`"
                v-bind:depressed="index === selectedTool"
                v-bind:large="index === selectedTool"
              >{{ tool }}</base-button>
            </center>
            <br />
          </div>
        </div>
        <div
          class="alert alert-danger alert-dismissible fade show text-right"
          v-if="showSnackbar"
          role="alert"
        >
          <span style="text-align:left" v-text="errorMessage"></span>

          <base-button
            type="default"
            class="btn btn-primary btn-sm"
            @click="showSnackbar = false"
          >Close</base-button>
        </div>

        <div v-if="!showSnackbar">
          <base-button block type="success" native-type="Submit" @click="runAnalysis">Run Analysis</base-button>
        </div>
      </form>
    </card>
        <div>
      <div v-if="analysing && !showSnackbar" loading class="analysis" style="text-align:left">
        <div>
          <card>
            <span loading slot="header" type="primary">
              <br />
              <h1 class="text-success">Analysing</h1>
              <h5>Depending on the number of tools chosen, this may take a while. Enjoy a coffee meanwhile.</h5>
              <base-button block loading type="primary">Analysing</base-button>
              <br />
            </span>
          </card>
        </div>
      </div>

      <div v-if="analysis" class="analysis" style="text-align:left">
        <div v-if="options.series[0].data.length != 0">
          <card>
            <center>
              <b>Number of issues found by each tool</b>
              <v-chart :options="options"></v-chart>
            </center>
          </card>
        </div>
        <div v-for="(result, i) in results" :key="i">
          <card>
            <span slot="header" type="primary">
              <h3 class="text-success">
                <div >
                  <b>{{result.contract}}</b>
                </div>
               
              </h3>
            </span>

            <!-- HONEYBADGER -->
            <div v-if="result.tool === 'honeybadger' ">
              <div v-if="result.analysis.length === 0 || result.analysis[0].errors.length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(analysis, id) in result.analysis" :key="id">
                <div v-for="(error, id) in analysis.errors" :key="id">
                  <h4 class="text-danger" style="text-align:left">
                    <b>{{ error.message }}</b>
                  </h4>
                  <p class="card-text">
                    <h5>
                      Line:
                      <i class="text-warning">{{error.line}}</i>
                    </h5>
                  </p>

                  <br />
                </div>
              </div>
            </div>

            <!-- MYTHRIL -->
            <div v-if="result.tool === 'mythril' ">
              <div v-if="result.analysis.issues.length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(issue, id) in result.analysis.issues" :key="id">
                <h4 class="text-danger" style="text-align:left">
                  <b>{{ issue.title }}</b>
                </h4>
                <p class="card-text">
                  <h5>Description: {{issue.description}}</h5>
                </p>
                <p class="card-text">
                  <h5>
                    Type:
                    <i>{{issue.type}}</i>
                  </h5>
                </p>
                <p class="card-text">
                  <h5>
                    Code:
                    <i class="text-warning">{{issue.code}}</i> at line:
                    <i class="text-warning">{{issue.lineno}}</i>
                  </h5>
                </p>
                <br />
              </div>
            </div>

            <!-- MAIAN -->
            <div v-if="result.tool === 'maian'">
              <div
                v-if="!result.analysis.is_lock_vulnerable && !result.analysis.is_lock_vulnerable && !result.analysis.is_prodigal_vulnerable"
              >
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-if="result.analysis.is_lock_vulnerable">
                <h4 class="text-danger" style="text-align:left">
                  <b>The contract is lock vulnerable</b>
                </h4>
              </div>

              <div v-if="result.analysis.is_prodigal_vulnerable">
                <h4 class="text-danger" style="text-align:left">
                  <b>The contract is prodigal vulnerable</b>
                </h4>
              </div>

              <div v-if="result.analysis.is_suicidal_vulnerable">
                <h4 class="text-danger" style="text-align:left">
                  <b>The contract is suicidal vulnerable</b>
                </h4>
                <br />
              </div>
            </div>

            <!-- OYENTE -->
            <div v-if="result.tool === 'oyente' ">
              <div v-if="result.analysis.length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(analysis, id) in result.analysis" :key="id">
                <div v-for="(error, id) in analysis.errors" :key="id">
                  <h4 class="text-danger" style="text-align:left">
                    <b>{{ error.message }}</b>
                  </h4>

                  <p class="card-text">
                    <h5>
                      Type:
                      <i>{{error.level}}</i>
                    </h5>
                  </p>
                  <p class="card-text">
                    <h5>
                      Line:
                      <i class="text-warning">{{error.line}}</i>
                    </h5>
                  </p>

                  <br />
                </div>
              </div>
            </div>

            <!-- OSIRIS -->
            <div v-if="result.tool === 'osiris' ">
              <div v-if="result.analysis.length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(analysis, id) in result.analysis" :key="id">
                <div v-for="(error, id) in analysis.errors" :key="id">
                  <h4 class="text-danger" style="text-align:left">
                    <b>{{ error.message }}</b>
                  </h4>
                  <p class="card-text">
                    <h5>
                      Line:
                      <i class="text-warning">{{error.line}}</i>
                    </h5>
                  </p>

                  <br />
                </div>
              </div>
            </div>

            <!-- MANTICORE -->
            <div v-if="result.tool === 'manticore' ">
              <div v-if="result.analysis.length === 0 || result.analysis[0].length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(analysis, id) in result.analysis" :key="id">
                <div v-for="(error, id) in analysis" :key="id">
                  <h4 class="text-danger" style="text-align:left">
                    <b>{{ error.name }}</b>
                  </h4>
                  <p class="card-text">
                    <h5>
                      Code:
                      <i class="text-warning">{{error.code}}</i> at line:
                      <i class="text-warning">{{error.line}}</i>
                    </h5>
                  </p>

                  <br />
                </div>
              </div>
            </div>

            <!-- SECURIFY -->
            <div v-if="result.tool === 'securify'">
              <div v-if=" result.analysis === null">
                <h5 class="text-info">No issue detected.</h5>
              </div>

              <div v-else>
                <div v-if="result.analysis.toAnalyze.results.DAO.hasViolations">
                  <h4 class="text-danger" style="text-align:left">
                    <b>DAO</b>
                  </h4>
                  <p v-if="result.analysis.toAnalyze.results.DAO.hasViolations" class="card-text">
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.DAO.violations }}</i>
                    </h5>
                  </p>
                </div>

                <div v-if="result.analysis.toAnalyze.results.DAOConstantGas.hasViolations">
                  <h4 class="text-danger" style="text-align:left">
                    <b>DAOConstantGas</b>
                  </h4>
                  <p
                    v-if="result.analysis.toAnalyze.results.DAOConstantGas.hasViolations"
                    class="card-text"
                  >
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.DAOConstantGas.violations }}</i>
                    </h5>
                  </p>
                </div>

                <div v-if="result.analysis.toAnalyze.results.MissingInputValidation.hasViolations">
                  <h4 class="text-danger" style="text-align:left">
                    <b>MissingInputValidation</b>
                  </h4>
                  <p
                    v-if="result.analysis.toAnalyze.results.MissingInputValidation.hasViolations"
                    class="card-text"
                  >
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.MissingInputValidation.violations }}</i>
                    </h5>
                  </p>
                </div>

                <div v-if="result.analysis.toAnalyze.results.TODAmount.hasViolations">
                  <h4 class="text-danger" style="text-align:left">
                    <b>TODAmount</b>
                  </h4>
                  <p
                    v-if="result.analysis.toAnalyze.results.TODAmount.hasViolations"
                    class="card-text"
                  >
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.TODAmount.violations }}</i>
                    </h5>
                  </p>
                </div>

                <div v-if="result.analysis.toAnalyze.results.TODReceiver.hasViolations">
                  <h4 class="text-danger" style="text-align:left">
                    <b>TODReceiver</b>
                  </h4>
                  <p
                    v-if="result.analysis.toAnalyze.results.TODReceiver.hasViolations"
                    class="card-text"
                  >
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.TODReceiver.violations }}</i>
                    </h5>
                  </p>
                </div>

                <div v-if="result.analysis.toAnalyze.results.TODTransfer.hasViolations">
                  <h4 cclass="text-danger" style="text-align:left">
                    <b>TODTransfer</b>
                  </h4>
                  <p
                    v-if="result.analysis.toAnalyze.results.TODTransfer.hasViolations"
                    class="card-text"
                  >
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.TODTransfer.violations }}</i>
                    </h5>
                  </p>
                </div>

                <div v-if="result.analysis.toAnalyze.results.UnhandledException.hasViolations">
                  <h4 class="text-danger" style="text-align:left">
                    <b>UnhandledException</b>
                  </h4>
                  <p
                    v-if="result.analysis.toAnalyze.results.UnhandledException.hasViolations"
                    class="card-text"
                  >
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.UnhandledException.violations }}</i>
                    </h5>
                  </p>
                </div>

                <div v-if="result.analysis.toAnalyze.results.UnrestrictedEtherFlow.hasViolations">
                  <h4 class="text-danger" style="text-align:left">
                    <b>UnrestrictedEtherFlow</b>
                  </h4>
                  <p
                    v-if="result.analysis.toAnalyze.results.UnrestrictedEtherFlow.hasViolations"
                    class="card-text"
                  >
                    <h5>
                      At lines:
                      <i
                        class="text-warning"
                      >{{ result.analysis.toAnalyze.results.UnrestrictedEtherFlow.violations }}</i>
                    </h5>
                  </p>
                </div>
              </div>
            </div>

            <!-- SLITHER -->
            <div v-if="result.tool === 'slither' ">
              <div v-if="result.analysis.length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(analysis, id) in result.analysis" :key="id">
                <h4 class="text-danger" style="text-align:left">
                  <b>{{ analysis.check }}</b>
                </h4>
                <p class="card-text">
                  <h5>{{analysis.description}}</h5>
                </p>
                <br />
              </div>
            </div>

            <!-- SMARTCHECK -->
            <div v-if="result.tool === 'smartcheck' ">
              <div v-if="result.analysis.length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(analysis, id) in result.analysis" :key="id">
                <h4 class="text-danger" style="text-align:left">{{ analysis.name }}</h4>
                <p class="card-text">
                  <h5>
                    <i class="text-warning">{{analysis.content}}</i> at line
                    <i class="text-warning">{{analysis.line}}</i>
                  </h5>
                </p>
                <br />
              </div>
            </div>

            <!-- solhint -->
            <div v-if="result.tool === 'solhint' ">
              <div v-if="result.analysis.length === 0">
                <h5 class="text-info">No issue detected.</h5>
              </div>
              <div v-for="(analysis, id) in result.analysis" :key="id">
                <p class="text-danger">
                  <h5>
                    <i class="text-warning">{{analysis.message}}</i> at line
                    <i class="text-warning">{{analysis.line}}</i>
                  </h5>
                </p>
              </div>
            </div>
          </card>
        </div>
        <div>
          <base-button block type="warning" native-type="Submit" @click="clear">Clear</base-button>
        </div>
      </div>
    </div>
    <div
      class="alert alert-danger alert-dismissible fade show text-right"
      v-if="showSnackbar"
      role="alert">
        <span style="text-align:left" v-text="errorMessage"></span>
        <base-button
          type="default"
          class="btn btn-primary btn-sm"
          @click="clear"
        >Close
        </base-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.timeout = 10 * 60 * 1000;
export default {
  data() {
    return {
      options: {},
      showSnackbar: false,
      errorMessage: "",
      analysis: false,
      analysing: false,
      loading: false,
      input: "",
      results: [],
      selectedTool: 100,
      selectedTools: [],
      selectedDataset: 100,
      selectedDatasetIndex: 100,
      tools: [
        "HoneyBadger",
        "Maian",
        "Manticore",
        "Mythril",
        "Osiris",
        "Oyente",
        "Securify",
        "Slither",
        "SmartCheck",
        "SolHint"
      ],
      datasets: [
        "Access Control",
        "Arithmetic",
        "Bad Randomness",
        "Denial Of Service",
        "Front Running",
        "Other",
        "Reentrancy",
        "Short Addresses",
        "Time Manipulation",
        "Unchecked Low Level Calls"
      ]
    };
  },
  methods: {
    selectTools(index) {
      this.selectedTool = index;
      if (this.selectedTools.includes(this.tools[index])) {
        const i = this.selectedTools.indexOf(this.tools[index]);
        this.selectedTools.splice(i, 1);
      } else {
        if (this.selectedTools.length === 1) this.selectedTools = []
        this.selectedTools.push(this.tools[index]);
      }
    },
    selectDataset(index) {
      this.selectedDatasetIndex = index;
      this.selectedDataset = this.datasets[index];
    },
    clear() {
      this.loading = false
      this.analysing = false
      this.showSnackbar = false
      this.analysis = false;
      this.selectedTool = 100;
      this.selectedTools = [];
      this.input = "";
    },
    async loadChart(tools, issues) {
      this.options = {
        autoresize: true,
        title: {
          text: "Number of issues foun by tool",
          left: 10
        },
        toolbox: {
          feature: {
            magicType: {
              type: ["line", "bar"],

              title: {
                line: "line",
                bar: "bar"
              }
            },
            saveAsImage: { title: "Save as Image" }
          }
        },

        grid: {
          bottom: 70
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },

        xAxis: {
          data: tools,
          silent: false,
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#eee"
            }
          },
          nameTextStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#eee"
            }
          },
          nameTextStyle: {
            color: "#fff",
            fontSize: 16
          },
          splitArea: {
            show: false
          }
        },
        series: [
          {
            type: "bar",
            data: issues,
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    },
    async runAnalysis() {
      try {
        if (this.selectedDataset === 100)
          throw new Error("Dataset not selected");
        let tools = [];
        this.selectedTools.forEach(tool => {
          tools.push(tool.toLowerCase());
        });

        this.analysing = true;

        let dataset
        if (this.selectedDataset === "Access Control") dataset = "access_control"
        if (this.selectedDataset === "Arithmetic") dataset = "arithmetic"
        if (this.selectedDataset === "Bad Randomness") dataset = "bad_randomness"
        if (this.selectedDataset === "Denial Of Service") dataset = "denial_of_service"
        if (this.selectedDataset === "Front Running") dataset = "front_running"
        if (this.selectedDataset === "Other") dataset = "other"
        if (this.selectedDataset === "Reentrancy") dataset = "reentrancy"
        if (this.selectedDataset === "Short Addresses") dataset = "short_addresses"
        if (this.selectedDataset === "Time Manipulation") dataset = "time_manipulation"
        if (this.selectedDataset === "Unchecked Low Level Calls") dataset = "unchecked_low_level_calls"

        const result = await axios.post(
          "http://localhost:5000/dataset-analysis",
          {
            tools: tools,
            dataset: dataset
          }
        );

        let issues = [];
   
        result.data.forEach(result => {
        if (
          result.tool === "oyente" ||
          result.tool === "honeybadger" ||
          result.tool === "osiris" 
        ) {
            issues.push(result.analysis[0].errors.length);
        } else if ( result.tool === "manticore" ) {
            issues.push(result.analysis[0].length);
        } else if ( result.tool === "securify" ) {
            let nrIssues = 0
            if(result.analysis.toAnalyze.results.DAO.hasViolations) nrIssues++
            if(result.analysis.toAnalyze.results.DAOConstantGas.hasViolations) nrIssues++
            if(result.analysis.toAnalyze.results.MissingInputValidation.hasViolations) nrIssues++
            if(result.analysis.toAnalyze.results.TODAmount.hasViolations) nrIssues++
            if(result.analysis.toAnalyze.results.TODReceiver.hasViolations) nrIssues++
            if(result.analysis.toAnalyze.results.TODTransfer.hasViolations) nrIssues++
            if(result.analysis.toAnalyze.results.UnhandledException.hasViolations) nrIssues++
            if(result.analysis.toAnalyze.results.UnrestrictedEtherFlow.hasViolations) nrIssues++
            
            issues.push(nrIssues);
          } else if (result.tool === "mythril") {
            issues.push(result.analysis.issues.length);
          } else {
            issues.push(result.analysis.length);
          }
        });

        this.loadChart(tools, issues);
        this.analysing = false;
        this.analysis = true;
        this.results = result.data;
      } catch (error) {
        this.loading = false;
        if (this.selectedDataset === 100) {
          this.errorMessage = "Please choose a dataset. ";
          this.showSnackbar = true;
        } else {
          this.errorMessage = "Upss! Something went wrong... ";
          this.showSnackbar = true;
        }
      }
    }
  }
};
</script>


