<!--
<template>
  <card>
    <span slot="header">Vulnerabilities</span>
    <h3 class="text-danger">Vulnerabilities Mapping</h3>
    <p
      class="card-text"
    >We mapped each vulnerability flagged by each tool to correspond to a DASP TOP10 category.</p>
    <p class="card-text">You can consult our mapping and even contribute.</p>
    <br />
    <base-button
      block
      type="success"
      native-type="Submit"
      onclick="location.href='https://docs.google.com/spreadsheets/d/1LZ-wp4uJy2581DiVB819FZ6DwKWJXYiXubSdOiVttdw/edit#gid=0';"
    >Consult Vulnerabilities mapping</base-button>
  </card>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

-->

<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title">
        <div class="table-responsive">
          <base-table :data="table1.data" :columns="table1.columns" thead-classes="text-primary"></base-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { BaseTable } from "@/components";
const tableColumns = ["Tool", "Vulnerability", "Category"];
const tableData = [
  {
    id: "1",
    tool: "Maian",
    vulnerability: "is_lock_vulnerable",
    category: "Other"
  },
  {
    id: "2",
    tool: "Maian",
    vulnerability: "is_prodigal_vulnerable",
    category: "Access Control"
  },
  {
    id: "3",
    tool: "Maian",
    vulnerability: "is_suicidal_vulnerable",
    category: "Access Control"
  },
  {
    id: "4",
    tool: "Manticore",
    vulnerability: "Delegatecall to user controlled address",
    category: "Access Control"
  },
  {
    id: "5",
    tool: "Manticore",
    vulnerability: "Delegatecall to user controlled function",
    category: "Access Control"
  },
  {
    id: "6",
    tool: "Manticore",
    vulnerability: "INVALID instruction",
    category: "Other"
  },
  {
    id: "7",
    tool: "Manticore",
    vulnerability: "Potential reentrancy vulnerability",
    category: "Reentrancy"
  },
  {
    id: "8",
    tool: "Manticore",
    vulnerability: "Potentially reading uninitialized memory at instruction",
    category: "Other"
  },
  {
    id: "9",
    tool: "Manticore",
    vulnerability: "Potentially reading uninitialized storage",
    category: "Other"
  },
  {
    id: "10",
    tool: "Manticore",
    vulnerability: "Reachable ether leak to sender",
    category: "Access Control"
  },
  {
    id: "11",
    tool: "Manticore",
    vulnerability: "Reachable ether leak to sender via argument",
    category: "Access Control"
  },
  {
    id: "12",
    tool: "Manticore",
    vulnerability: "Reachable external call to sender",
    category: "Access Control"
  },
  {
    id: "13",
    tool: "Manticore",
    vulnerability: "Reachable external call to sender via argument",
    category: "Access Control"
  },
  {
    id: "14",
    tool: "Manticore",
    vulnerability: "Reachable SELFDESTRUCT",
    category: "Access Control"
  },
  {
    id: "15",
    tool: "Manticore",
    vulnerability: "Reentrancy multi-million ether bug",
    category: "Reentrancy"
  },
  {
    id: "16",
    tool: "Manticore",
    vulnerability: "Returned value at CALL instruction is not used",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "17",
    tool: "Manticore",
    vulnerability: "Returned value at CALL instruction is not used",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "18",
    tool: "Manticore",
    vulnerability: "Unsigned integer overflow at ADD instruction",
    category: "Arithmetic"
  },
  {
    id: "19",
    tool: "Manticore",
    vulnerability: "Unsigned integer overflow at MUL instruction",
    category: "Arithmetic"
  },
  {
    id: "20",
    tool: "Manticore",
    vulnerability: "Unsigned integer overflow at SUB instruction",
    category: "Arithmetic"
  },
  {
    id: "21",
    tool: "Manticore",
    vulnerability: "Warning BLOCKHASH instruction used",
    category: "Other"
  },
  {
    id: "22",
    tool: "Manticore",
    vulnerability: "Warning NUMBER instruction used",
    category: "Other"
  },
  {
    id: "23",
    tool: "Manticore",
    vulnerability: "Warning ORIGIN instruction used",
    category: "Access Control"
  },
  {
    id: "24",
    tool: "Manticore",
    vulnerability: "Warning TIMESTAMP instruction used",
    category: "Time Manipulation"
  },
  {
    id: "25",
    tool: "Mythril",
    vulnerability: "Call data forwarded with delegatecall()",
    category: "Access Control"
  },
  {
    id: "26",
    tool: "Mythril",
    vulnerability: "DELEGATECALL to a user-supplied address",
    category: "Access Control"
  },
  {
    id: "27",
    tool: "Mythril",
    vulnerability: "Dependence on predictable environment variable",
    category: "Other"
  },
  {
    id: "28",
    tool: "Mythril",
    vulnerability: "Dependence on predictable variable",
    category: "Other"
  },
  {
    id: "29",
    tool: "Mythril",
    vulnerability: "Ether send",
    category: "Access Control"
  },
  {
    id: "30",
    tool: "Mythril",
    vulnerability: "Exception state",
    category: "Other"
  },
  {
    id: "31",
    tool: "Mythril",
    vulnerability: "Integer Overflow",
    category: "Arithmetic"
  },
  {
    id: "32",
    tool: "Mythril",
    vulnerability: "Integer Underflow",
    category: "Arithmetic"
  },
  {
    id: "33",
    tool: "Mythril",
    vulnerability: "Message call to external contract",
    category: "Reentrancy"
  },
  {
    id: "34",
    tool: "Mythril",
    vulnerability: "Multiple Calls",
    category: "Ignore"
  },
  {
    id: "35",
    tool: "Mythril",
    vulnerability: "State change after external call",
    category: "Reentrancy"
  },
  {
    id: "36",
    tool: "Mythril",
    vulnerability: "Transaction order dependence",
    category: "front_running"
  },
  {
    id: "37",
    tool: "Mythril",
    vulnerability: "Unchecked CALL return value",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "38",
    tool: "Mythril",
    vulnerability: "Unchecked SUICIDE",
    category: "Access Control"
  },
  {
    id: "39",
    tool: "Mythril",
    vulnerability: "Use of tx.origin",
    category: "Access Control"
  },
  {
    id: "40",
    tool: "Osiris",
    vulnerability: "callstack_bug",
    category: "Denial of Service"
  },
  {
    id: "41",
    tool: "Osiris",
    vulnerability: "concurrency_bug",
    category: "Ignore"
  },
  {
    id: "42",
    tool: "Osiris",
    vulnerability: "division_bugs",
    category: "Arithmetic"
  },
  {
    id: "43",
    tool: "Osiris",
    vulnerability: "overflow_bugs",
    category: "Arithmetic"
  },
  {
    id: "44",
    tool: "Osiris",
    vulnerability: "reentrancy_bug",
    category: "Reentrancy"
  },
  {
    id: "45",
    tool: "Osiris",
    vulnerability: "signedness_bugs",
    category: "Arithmetic"
  },
  {
    id: "46",
    tool: "Osiris",
    vulnerability: "time_dependency_bug",
    category: "Time Manipulation"
  },
  {
    id: "47",
    tool: "Osiris",
    vulnerability: "truncation_bugs",
    category: "Arithmetic"
  },
  {
    id: "48",
    tool: "Osiris",
    vulnerability: "underflow_bugs",
    category: "Arithmetic"
  },
  {
    id: "49",
    tool: "Oyente",
    vulnerability: "Callstack Depth Attack Vulnerability.",
    category: "Denial of Service"
  },
  {
    id: "50",
    tool: "Oyente",
    vulnerability: "Integer Overflow.",
    category: "Arithmetic"
  },
  {
    id: "51",
    tool: "Oyente",
    vulnerability: "Integer Underflow.",
    category: "Arithmetic"
  },
  {
    id: "52",
    tool: "Oyente",
    vulnerability: "Parity Multisig Bug 2.",
    category: "Access Control"
  },
  {
    id: "53",
    tool: "Oyente",
    vulnerability: "Re-Entrancy Vulnerability.",
    category: "Reentrancy"
  },
  {
    id: "54",
    tool: "Oyente",
    vulnerability: "Timestamp Dependency.",
    category: "Time Manipulation"
  },
  {
    id: "55",
    tool: "Securify",
    vulnerability: "DAO",
    category: "Reentrancy"
  },
  {
    id: "56",
    tool: "Securify",
    vulnerability: "DAOConstantGas",
    category: "Reentrancy"
  },
  {
    id: "57",
    tool: "Securify",
    vulnerability: "LockedEther",
    category: "Other"
  },
  {
    id: "58",
    tool: "Securify",
    vulnerability: "MissingInputValidation",
    category: "Ignore"
  },
  {
    id: "59",
    tool: "Securify",
    vulnerability: "RepeatedCall",
    category: "Ignore"
  },
  {
    id: "60",
    tool: "Securify",
    vulnerability: "TODAmount",
    category: "front_running"
  },
  {
    id: "61",
    tool: "Securify",
    vulnerability: "TODReceiver",
    category: "front_running"
  },
  {
    id: "62",
    tool: "Securify",
    vulnerability: "TODTransfer",
    category: "front_running"
  },
  {
    id: "63",
    tool: "Securify",
    vulnerability: "UnhandledException",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "64",
    tool: "Securify",
    vulnerability: "UnrestrictedEtherFlow",
    category: "Access Control"
  },
  {
    id: "65",
    tool: "Securify",
    vulnerability: "UnrestrictedWrite",
    category: "Access Control"
  },
  {
    id: "66",
    tool: "Slither",
    vulnerability: "arbitrary-send",
    category: "Access Control"
  },
  {
    id: "67",
    tool: "Slither",
    vulnerability: "assembly",
    category: "Ignore"
  },
  {
    id: "68",
    tool: "Slither",
    vulnerability: "calls-loop",
    category: "Denial of Service"
  },
  {
    id: "69",
    tool: "Slither",
    vulnerability: "constable-states",
    category: "Ignore"
  },
  {
    id: "70",
    tool: "Slither",
    vulnerability: "constant-function",
    category: "Ignore"
  },
  {
    id: "71",
    tool: "Slither",
    vulnerability: "controlled-delegatecall",
    category: "Access Control"
  },
  {
    id: "72",
    tool: "Slither",
    vulnerability: "deprecated-standards",
    category: "Ignore"
  },
  {
    id: "73",
    tool: "Slither",
    vulnerability: "erc20-indexed",
    category: "Ignore"
  },
  {
    id: "74",
    tool: "Slither",
    vulnerability: "erc20-interface",
    category: "Ignore"
  },
  {
    id: "75",
    tool: "Slither",
    vulnerability: "external-function",
    category: "Ignore"
  },
  {
    id: "76",
    tool: "Slither",
    vulnerability: "incorrect-equality",
    category: "Other"
  },
  {
    id: "77",
    tool: "Slither",
    vulnerability: "locked-ether",
    category: "Other"
  },
  {
    id: "78",
    tool: "Slither",
    vulnerability: "low-level-calls",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "79",
    tool: "Slither",
    vulnerability: "naming-convention",
    category: "Ignore"
  },
  {
    id: "80",
    tool: "Slither",
    vulnerability: "reentrancy-benign",
    category: "Reentrancy"
  },
  {
    id: "81",
    tool: "Slither",
    vulnerability: "reentrancy-eth",
    category: "Reentrancy"
  },
  {
    id: "82",
    tool: "Slither",
    vulnerability: "reentrancy-no-eth",
    category: "Reentrancy"
  },
  {
    id: "83",
    tool: "Slither",
    vulnerability: "shadowing-abstract",
    category: "Ignore"
  },
  {
    id: "84",
    tool: "Slither",
    vulnerability: "shadowing-builtin",
    category: "Ignore"
  },
  {
    id: "85",
    tool: "Slither",
    vulnerability: "shadowing-local",
    category: "Ignore"
  },
  {
    id: "86",
    tool: "Slither",
    vulnerability: "shadowing-state",
    category: "Ignore"
  },
  {
    id: "87",
    tool: "Slither",
    vulnerability: "solc-version",
    category: "Ignore"
  },
  {
    id: "88",
    tool: "Slither",
    vulnerability: "suicidal",
    category: "Access Control"
  },
  {
    id: "89",
    tool: "Slither",
    vulnerability: "timestamp",
    category: "Time Manipulation"
  },
  {
    id: "90",
    tool: "Slither",
    vulnerability: "tx-origin",
    category: "Access Control"
  },
  {
    id: "91",
    tool: "Slither",
    vulnerability: "uninitialized-local",
    category: "Other"
  },
  {
    id: "92",
    tool: "Slither",
    vulnerability: "uninitialized-state",
    category: "Other"
  },
  {
    id: "93",
    tool: "Slither",
    vulnerability: "uninitialized-storage",
    category: "Other"
  },
  {
    id: "94",
    tool: "Slither",
    vulnerability: "unused-return",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "95",
    tool: "Slither",
    vulnerability: "unused-state",
    category: "Ignore"
  },
  {
    id: "96",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_ADDRESS_HARDCODED",
    category: "Ignore"
  },
  {
    id: "97",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_ARRAY_LENGTH_MANIPULATION",
    category: "Arithmetic"
  },
  {
    id: "98",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_BALANCE_EQUALITY",
    category: "Other"
  },
  {
    id: "99",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_BYTE_ARRAY_INSTEAD_BYTES",
    category: "Ignore"
  },
  {
    id: "100",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_CALL_WITHOUT_DATA",
    category: "Reentrancy"
  },
  {
    id: "101",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_DEPRECATED_CONSTRUCTIONS",
    category: "Ignore"
  },
  {
    id: "102",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_DIV_MUL",
    category: "Arithmetic"
  },
  {
    id: "103",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_ERC20_APPROVE",
    category: "Ignore"
  },
  {
    id: "104",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_ERC20_FUNCTIONS_ALWAYS_RETURN_FALSE",
    category: "Ignore"
  },
  {
    id: "105",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_ERC20_TRANSFER_SHOULD_THROW",
    category: "Ignore"
  },
  {
    id: "106",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_EXACT_TIME",
    category: "Time Manipulation"
  },
  {
    id: "107",
    tool: "SmartCheck",
    vulnerability: "SOLIDITY_EXTRA_GAS_IN_LOOPS",
    category: "Ignore"
  },
  {
    id: "108",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_FUNCTIONS_RETURNS_TYPE_AND_NO_RETURN",
    category: "Other"
  },
  {
    id: "109",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_GAS_LIMIT_IN_LOOPS",
    category: "Denial of Service"
  },
  {
    id: "110",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_INCORRECT_BLOCKHASH",
    category: "Other"
  },
  {
    id: "111",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_LOCKED_MONEY",
    category: "Other"
  },
  {
    id: "112",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_MSGVALUE_EQUALS_ZERO",
    category: "Ignore"
  },
  {
    id: "113",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_OVERPOWERED_ROLE",
    category: "Ignore"
  },
  {
    id: "114",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_PRAGMAS_VERSION",
    category: "Ignore"
  },
  {
    id: "115",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_PRIVATE_MODIFIER_DONT_HIDE_DATA",
    category: "Ignore"
  },
  {
    id: "116",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_REDUNDANT_FALLBACK_REJECT",
    category: "Ignore"
  },
  {
    id: "117",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_REVERT_REQUIRE",
    category: "Ignore"
  },
  {
    id: "118",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_SAFEMATH",
    category: "Ignore"
  },
  {
    id: "119",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_SEND",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "120",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_SHOULD_NOT_BE_PURE",
    category: "Ignore"
  },
  {
    id: "121",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_SHOULD_NOT_BE_VIEW",
    category: "Ignore"
  },
  {
    id: "122",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_SHOULD_RETURN_STRUCT",
    category: "Ignore"
  },
  {
    id: "123",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_TRANSFER_IN_LOOP",
    category: "Denial of Service"
  },
  {
    id: "124",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_TX_ORIGIN",
    category: "Access Control"
  },
  {
    id: "125",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_UINT_CANT_BE_NEGATIVE",
    category: "Arithmetic"
  },
  {
    id: "126",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_UNCHECKED_CALL",
    category: "Unchecked Low Level Calls"
  },
  {
    id: "127",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_UPGRADE_TO_050",
    category: "Ignore"
  },
  {
    id: "128",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_USING_INLINE_ASSEMBLY",
    category: "Ignore"
  },
  {
    id: "129",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_VAR",
    category: "Arithmetic"
  },
  {
    id: "130",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_VAR_IN_LOOP_FOR",
    category: "Arithmetic"
  },
  {
    id: "131",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_VISIBILITY",
    category: "Ignore"
  },
  {
    id: "132",
    tool: "smartcheck",
    vulnerability: "SOLIDITY_WRONG_SIGNATURE",
    category: "Ignore"
  },
  {
    id: "133",
    tool: "SolHint",
    vulnerability: "indent",
    category: "Ignore"
  },
  {
    id: "134",
    tool: "SolHint",
    vulnerability: "max-line-length",
    category: "Ignore"
  },
  {
    id: "135",
    tool: "HoneyBadger",
    vulnerability: "hidden_state_update",
    category: "Ignore"
  },
  {
    id: "136",
    tool: "HoneyBadger",
    vulnerability: "uninitialised_struct",
    category: "Other"
  },
  {
    id: "137",
    tool: "HoneyBadger",
    vulnerability: "inheritance_disorder",
    category: "Ignore"
  },
  {
    id: "138",
    tool: "HoneyBadger",
    vulnerability: "straw_man_contract",
    category: "reentrancy"
  },
  {
    id: "139",
    tool: "HoneyBadger",
    vulnerability: "hidden_transfer",
    category: "Other"
  },
  {
    id: "140",
    tool: "HoneyBadger",
    vulnerability: "balance_disorder",
    category: "Ignore"
  },
  {
    id: "141",
    tool: "HoneyBadger",
    vulnerability: "type_overflow",
    category: "Arithmetic"
  }
];
export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Vulnerabilities Mapping",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>