<template>
  <div>
    <card>
      <span slot="header">Analysis</span>
      <h4 class="text-success">
        <b>Paste code to analyse</b>
      </h4>
      <p class="card-text">Paste a smart contract to be analysed.</p>
      <br />
      <base-button
        block
        type="success"
        native-type="Submit"
        @click="analyzePastedFile"
      >Paste code and analyse it</base-button>
    </card>
    <card>
      <span slot="header">Analysis</span>
      <h4 class="text-success">
        <b>Import file to analyse</b>
      </h4>
      <p class="card-text">Import a smart contract written in Solidity to be analysed.</p>
      <br />
      <base-button
        block
        type="success"
        native-type="Submit"
        @click="analyzeImportedFile"
      >Import a file to analyse</base-button>
    </card>

    <card>
      <span slot="header">Analysis</span>
      <h4 class="text-success">
        <b>Analyse a dataset</b>
      </h4>
      <p
        class="card-text"
      >Run analysis on one of our datasets or one made by yourself. Useful to run several contracts on named datasets.</p>
      <br />
      <base-button block type="success" native-type="Submit" @click="analyzeDataset">Analyse dataset</base-button>
    </card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      analysis: false,
      analysing: false,
      loading: false
    };
  },
  methods: {
    async analyzeImportedFile() {
      this.$router.push({
        name: "analyze-imported-file"
      });
    },
    async analyzePastedFile() {
      this.$router.push({
        name: "analyze-pasted-file"
      });
    },
    async analyzeDataset() {
      this.$router.push({
        name: "analyze-dataset"
      });
    }
  }
};
</script>


