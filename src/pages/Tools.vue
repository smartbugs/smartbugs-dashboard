<template>
  <card>
    <span slot="header">Tools</span>
    <h3 class="text-danger">We provide integration with 10 tools</h3>
    <p
      class="card-text"
    >Adding a tool to SmartBugs is an easy process. Check our github page for detailed instructions.</p>
    <br />

    <card>
      <h4 class="text-success">HoneyBadger</h4>
      <p class="card-text">
        Developed by a group of researchers at the University of Luxembourg and is an Oyente-based (see below) tool
        that employs symbolic execution and a set of heuristics to pinpoint
        honeypots in smart contracts. Honeypots are smart contracts that
        appear to have an obvious flaw in their design, which allows an
        arbitrary user to drain Ether2 from the contract, given that the
        user transfers a priori a certain amount of Ether to the contract.
        When HoneyBadger detects that a contract appears to be vulnerable,
        it means that the developer of the contract wanted to make the contract look vulnerable, but is not vulnerable.
      </p>
      <a
        class="nav-link"
        style="text-align:right"
        href="https://github.com/christoftorres/HoneyBadger"
      >Github</a>
    </card>
    <card>
      <h4 class="text-success">Maian</h4>
      <p class="card-text">
        Maian is also based on the Oyente tool and was developed jointly by researchers from the National University of Singapore and University College London. Maian looks for contracts that can be
        self-destructed or drained of Ether from arbitrary addresses, or that
        accept Ether but do not have a payout functionality. A dynamic
        analysis in a private blockchain is then used to reduce the number
        of false positives.
      </p>
      <a class="nav-link" style="text-align:right" href="https://github.com/MAIAN-tool/MAIAN">Github</a>
    </card>

    <card>
      <h4 class="text-success">Manticore</h4>
      <p class="card-text">
        Developed by TrailOfBits, uses symbolic
        execution to find execution paths in EVM bytecode that lead to
        reentrancy vulnerabilities and reachable self-destruct operations.
      </p>
      <a
        class="nav-link"
        style="text-align:right"
        href="https://github.com/trailofbits/manticore"
      >Github</a>
    </card>

    <card>
      <h4 class="text-success">Mythril</h4>
      <p class="card-text">
        Developed by ConsenSys, relies on concolic analysis, taint analysis and control flow checking of the EVM bytecode to
        prune the search space and to look for values that allow exploiting
        vulnerabilities in the smart contract.
      </p>
      <a
        class="nav-link"
        style="text-align:right"
        href="https://github.com/ConsenSys/mythril-classic"
      >Github</a>
    </card>

    <card>
      <h4 class="text-success">Osiris</h4>
      <p class="card-text">
        Developed by a group of researchers at the University of Luxembourg, extends Oyente to detect integer bugs in smart
        contracts.
      </p>
      <a
        class="nav-link"
        style="text-align:right"
        href="https://github.com/christoftorres/Osiris"
      >Github</a>
    </card>

    <card>
      <h4 class="text-success">Oyente</h4>
      <p class="card-text">
        Developed by Melonport AG, is one of the first
        smart contract analysis tools. It is also used as a basis for several
        other approaches like Maian and Osiris. Oyente uses symbolic execution on EVM bytecode to identify vulnerabilities.
      </p>
      <a
        class="nav-link"
        style="text-align:right"
        href="https://github.com/melonproject/oyente"
      >Github</a>
    </card>

    <card>
      <h4 class="text-success">Securify</h4>
      <p class="card-text">
        Developed by ICE Center at ETH Zurich, statically analyzes EVM bytecode to infer relevant and precise semantic information
        about the contract using the Souffle Datalog solver. It then checks compliance and violation patterns that capture sufficient
        conditions for proving if a property holds or not.
      </p>
      <a class="nav-link" style="text-align:right" href="https://github.com/eth-sri/securify">Github</a>
    </card>

    <card>
      <h4 class="text-success">Slither</h4>
      <p class="card-text">
        Developed by TrailOfBits, is a static analysis framework that converts Solidity smart contracts into an intermediate
        representation called SlithIR and applies known program analysis
        techniques such as dataflow and taint tracking to extract and refine information.
      </p>
      <a class="nav-link" style="text-align:right" href="https://github.com/crytic/slither">Github</a>
    </card>

    <card>
      <h4 class="text-success">Smartcheck</h4>
      <p class="card-text">
        Developed by SmartDec, is a static analysis tool that looks for vulnerability patterns and bad coding practices.
        It runs lexical and syntactical analysis on Solidity source code.
      </p>
      <a
        class="nav-link"
        style="text-align:right"
        href="https://github.com/smartdec/smartcheck"
      >Github</a>
    </card>

    <card>
      <h4 class="text-success">Solhint</h4>
      <p
        class="card-text"
      >Open source project for linting solidity code. This project provide both security and style guide validations.</p>
      <a
        class="nav-link"
        style="text-align:right"
        href="https://github.com/protofire/solhint"
      >Github</a>
    </card>
  </card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  }
};
</script>


