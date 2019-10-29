# Vulnerability Stat
|  #  | Vulnerability | Count |
| --- | ------------- | ----- |
|   1 | Integer Overflow |   74 |
|   2 | External-Function |   72 |
|   3 | Solidity Pragmas Version |   71 |
|   4 | Solidity Visibility |   53 |
|   5 | Indent     |   49 |
|   6 | Solc-Version |   48 |
|   7 | Naming-Convention |   42 |
|   8 | Integer Underflow |   33 |
|   9 | Max-Line-Length |   26 |
|  10 | Solidity Deprecated Constructions |   22 |
|  11 | Solidity Upgrade To 050 |   22 |
|  12 | Solidity Private Modifier Dont Hide Data |   18 |
|  13 | Exception State |   16 |
|  14 | Ether Send |   16 |
|  15 | Deprecated-Standards |   16 |
|  16 | Arbitrary-Send |   15 |
|  17 | Constable-States |   15 |
|  18 | Transaction Order Dependence |   13 |
|  19 | Unchecked Call Return Value |   11 |
|  20 | Callstack Depth Attack Vulnerability |   11 |
|  21 | Solidity Extra Gas In Loops |   11 |
|  22 | Solidity Gas Limit In Loops |   11 |
|  23 | Low-Level-Calls |   10 |
|  24 | Solidity Revert Require |   10 |
|  25 | Multiple Calls |    9 |
|  26 | Solidity Array Length Manipulation |    9 |
|  27 | Message Call To External Contract |    8 |
|  28 | Solidity Unchecked Call |    8 |
|  29 | Dependence On Predictable Environment Variable |    7 |
|  30 | Reentrancy-Eth |    7 |
|  31 | Incorrect-Equality |    7 |
|  32 | Solidity Call Without Data |    6 |
|  33 | Solidity Address Hardcoded |    6 |
|  34 | State Change After External Call |    5 |
|  35 | Timestamp  |    5 |
|  36 | Re-Entrancy Vulnerability |    5 |
|  37 | Solidity Erc20 Approve |    5 |
|  38 | Calls-Loop |    4 |
|  39 | Unused-State |    4 |
|  40 | Uninitialized-State |    4 |
|  41 | Solidity Div Mul |    4 |
|  42 | Solidity Safemath |    4 |
|  43 | Erc20-Interface |    3 |
|  44 | Shadowing-Local |    3 |
|  45 | Solidity Send |    3 |
|  46 | Solidity Functions Returns Type And No Return |    3 |
|  47 | Solidity Redundant Fallback Reject |    3 |
|  48 | Solidity Tx Origin |    3 |
|  49 | Use Of Txorigin |    2 |
|  50 | Controlled-Delegatecall |    2 |
|  51 | Uninitialized-Local |    2 |
|  52 | Tx-Origin  |    2 |
|  53 | Timestamp Dependency |    2 |
|  54 | Solidity Var |    2 |
|  55 | Unchecked Suicide |    1 |
|  56 | Call Data Forwarded With Delegatecall() |    1 |
|  57 | Delegatecall To A User-Supplied Address |    1 |
|  58 | Dependence On Predictable Variable |    1 |
|  59 | Suicidal   |    1 |
|  60 | Constant-Function |    1 |
|  61 | Reentrancy-No-Eth |    1 |
|  62 | Reentrancy-Benign |    1 |
|  63 | Assembly   |    1 |
|  64 | Uninitialized-Storage |    1 |
|  65 | Solidity Uint Cant Be Negative |    1 |
|  66 | Solidity Should Return Struct |    1 |
|  67 | Solidity Overpowered Role |    1 |
|  68 | Solidity Should Not Be Pure |    1 |
|  69 | Solidity Using Inline Assembly |    1 |
|  70 | Solidity Transfer In Loop |    1 |
|  71 | Solidity Balance Equality |    1 |
|  72 | Solidity Exact Time |    1 |
|  73 | Solidity Locked Money |    1 |
# Contract Vulnerabilities
## Token

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow, Integer Underflow |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Uint Cant Be Negative, Solidity Visibility |
|   7 | Securify   |  |

## Timed_Crowdsale

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | External-Function, Timestamp |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version |
|   7 | Securify   |  |

## King_Of_The_Ether_Throne

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version, Timestamp |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Div Mul, Solidity Pragmas Version, Solidity Unchecked Call, Solidity Visibility |
|   7 | Securify   |  |

## Reentrance

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow, Message Call To External Contract, State Change After External Call, Unchecked Call Return Value |
|   2 | Slither    | External-Function, Low-Level-Calls, Naming-Convention, Reentrancy-Eth, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow, Re-Entrancy Vulnerability |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Call Without Data, Solidity Pragmas Version, Solidity Upgrade To 050 |
|   7 | Securify   |  |

## Ether_Lotto

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Dependence On Predictable Environment Variable, Exception State, Integer Overflow, Multiple Calls, Transaction Order Dependence |
|   2 | Slither    | Arbitrary-Send, Deprecated-Standards, External-Function, Incorrect-Equality, Naming-Convention, Solc-Version, Timestamp |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Var, Solidity Visibility |
|   7 | Securify   |  |

## Dos_Simple

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Reentrancy_Dao

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow, Integer Underflow, Message Call To External Contract, State Change After External Call |
|   2 | Slither    | External-Function, Low-Level-Calls, Reentrancy-Eth, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow, Re-Entrancy Vulnerability |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Call Without Data, Solidity Pragmas Version, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Timelock

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Dependence On Predictable Environment Variable, Integer Overflow |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow, Timestamp Dependency |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version |
|   7 | Securify   |  |

## Auction

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Transaction Order Dependence |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Send, Solidity Visibility |
|   7 | Securify   |  |

## Integer_Overflow_Benign_1

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Constable-States, External-Function, Solc-Version |
|   3 | Oyente     | Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version |
|   7 | Securify   |  |

## Unchecked_Return_Value

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Message Call To External Contract, Unchecked Call Return Value |
|   2 | Slither    | External-Function, Low-Level-Calls |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Call Without Data, Solidity Unchecked Call, Solidity Upgrade To 050 |
|   7 | Securify   |  |

## Rubixi

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Exception State, Multiple Calls, Transaction Order Dependence, Unchecked Call Return Value |
|   2 | Slither    | Calls-Loop, Deprecated-Standards, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Div Mul, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Revert Require, Solidity Unchecked Call, Solidity Visibility |
|   7 | Securify   |  |

## Incorrect_Constructor_Name1

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Transaction Order Dependence |
|   2 | Slither    | External-Function, Naming-Convention |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Visibility |
|   7 | Securify   |  |

## Etherpot_Lotto

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Overflow, Unchecked Call Return Value |
|   2 | Slither    | Arbitrary-Send, Deprecated-Standards, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Array Length Manipulation, Solidity Deprecated Constructions, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Unchecked Call, Solidity Var, Solidity Visibility |
|   7 | Securify   |  |

## Proxy

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | Controlled-Delegatecall, External-Function, Low-Level-Calls, Naming-Convention |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Requirement_Simple

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | External-Function |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data |
|   7 | Securify   |  |

## Erc20

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Constable-States, External-Function, Unused-State |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Erc20 Approve, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Safemath, Solidity Visibility |
|   7 | Securify   |  |

## Walletlibrary

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Overflow, Integer Underflow, Message Call To External Contract |
|   2 | Slither    | Deprecated-Standards, External-Function, Low-Level-Calls, Naming-Convention, Reentrancy-Eth, Solc-Version, Uninitialized-Local, Unused-State |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Address Hardcoded, Solidity Array Length Manipulation, Solidity Deprecated Constructions, Solidity Extra Gas In Loops, Solidity Functions Returns Type And No Return, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Revert Require, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Visibility_Not_Set

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send |
|   2 | Slither    | Arbitrary-Send, External-Function, Naming-Convention |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Unchecked Call, Solidity Visibility |
|   7 | Securify   |  |

## Simple_Dao

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow, Message Call To External Contract, State Change After External Call, Unchecked Call Return Value |
|   2 | Slither    | External-Function, Low-Level-Calls, Reentrancy-Eth, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow, Re-Entrancy Vulnerability |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Call Without Data, Solidity Pragmas Version, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Integer_Overflow_Mul

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version |
|   7 | Securify   |  |

## Wallet_04_Confused_Sign

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Underflow |
|   2 | Slither    | External-Function |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Wallet_02_Refund_Nosub

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Exception State |
|   2 | Slither    | External-Function |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Tokensalechallenge

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Etherstore

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Dependence On Predictable Environment Variable, Integer Overflow, Message Call To External Contract, State Change After External Call |
|   2 | Slither    | Constable-States, External-Function, Low-Level-Calls, Naming-Convention, Reentrancy-Eth, Solc-Version |
|   3 | Oyente     | Integer Overflow, Re-Entrancy Vulnerability, Timestamp Dependency |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Call Without Data, Solidity Pragmas Version, Solidity Upgrade To 050 |
|   7 | Securify   |  |

## Integer_Overflow_1

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Functions Returns Type And No Return, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Visibility |
|   7 | Securify   |  |

## Dos_Address

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Merde_Token

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Overflow, Integer Underflow |
|   2 | Slither    | Erc20-Interface, External-Function, Naming-Convention, Shadowing-Local, Solc-Version |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Array Length Manipulation, Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Overflow_Single_Tx

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow, Integer Underflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version |
|   7 | Securify   |  |

## Integer_Overflow_Minimal

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Underflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     | Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version |
|   7 | Securify   |  |

## Send_Loop

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Multiple Calls |
|   2 | Slither    | Calls-Loop, External-Function, Uninitialized-Local, Uninitialized-State |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Address Hardcoded, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Send, Solidity Visibility |
|   7 | Securify   |  |

## Reentrancy_Simple

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Integer Overflow, Message Call To External Contract, State Change After External Call |
|   2 | Slither    | Deprecated-Standards, External-Function, Low-Level-Calls, Reentrancy-Eth, Solc-Version |
|   3 | Oyente     | Integer Overflow, Re-Entrancy Vulnerability |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Call Without Data, Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Revert Require, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Mapping_Write

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Overflow |
|   2 | Slither    | Constable-States, External-Function, Uninitialized-State |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Array Length Manipulation, Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Batch_Overflow

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Overflow |
|   2 | Slither    | Constable-States, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Erc20 Approve, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Redundant Fallback Reject, Solidity Safemath, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Storage

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Constable-States, External-Function, Naming-Convention, Unused-State |
|   3 | Oyente     | Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Address Hardcoded, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Visibility |
|   7 | Securify   |  |

## Arbitrary_Location_Write_Simple

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow, Integer Underflow |
|   2 | Slither    | External-Function, Naming-Convention |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Array Length Manipulation, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Upgrade To 050 |
|   7 | Securify   |  |

## Overflow_Simple_Add

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function, Naming-Convention |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck |  |
|   7 | Securify   |  |

## Blackjack

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Constable-States, Deprecated-Standards, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Revert Require, Solidity Should Return Struct, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Governmental_Survey

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Dependence On Predictable Environment Variable, Ether Send, Multiple Calls, Transaction Order Dependence, Unchecked Call Return Value |
|   2 | Slither    | Arbitrary-Send, Constable-States, Deprecated-Standards, External-Function, Naming-Convention, Solc-Version, Timestamp |
|   3 | Oyente     | Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Revert Require, Solidity Unchecked Call, Solidity Visibility |
|   7 | Securify   |  |

## Simple_Suicide

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Unchecked Suicide |
|   2 | Slither    | External-Function, Solc-Version, Suicidal |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Smart_Billions

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Constable-States, Deprecated-Standards, Erc20-Interface, External-Function, Incorrect-Equality, Naming-Convention, Shadowing-Local, Solc-Version |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Address Hardcoded, Solidity Array Length Manipulation, Solidity Deprecated Constructions, Solidity Div Mul, Solidity Erc20 Approve, Solidity Extra Gas In Loops, Solidity Overpowered Role, Solidity Pragmas Version, Solidity Safemath, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Spank_Chain_Payment

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | Arbitrary-Send, Assembly, Constable-States, Constant-Function, External-Function, Incorrect-Equality, Low-Level-Calls, Naming-Convention, Reentrancy-Benign, Reentrancy-Eth, Reentrancy-No-Eth, Solc-Version |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Address Hardcoded, Solidity Deprecated Constructions, Solidity Erc20 Approve, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Revert Require, Solidity Should Not Be Pure, Solidity Upgrade To 050, Solidity Using Inline Assembly, Solidity Visibility |
|   7 | Securify   |  |

## Random_Number_Generator

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    |  |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data |
|   7 | Securify   |  |

## Unprotected0

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data |
|   7 | Securify   |  |

## Fibonaccibalance

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Call Data Forwarded With Delegatecall(), Delegatecall To A User-Supplied Address, Ether Send, Integer Overflow, Multiple Calls |
|   2 | Slither    | Arbitrary-Send, Constable-States, Controlled-Delegatecall, Deprecated-Standards, External-Function, Low-Level-Calls, Naming-Convention, Solc-Version, Uninitialized-State |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Multiowned_Vulnerable

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Arbitrary-Send, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Incorrect_Constructor_Name2

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Transaction Order Dependence |
|   2 | Slither    | External-Function |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Visibility |
|   7 | Securify   |  |

## Lotto

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Transaction Order Dependence, Unchecked Call Return Value |
|   2 | Slither    | Arbitrary-Send, Constable-States, External-Function, Solc-Version, Uninitialized-State |
|   3 | Oyente     | Callstack Depth Attack Vulnerability |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Unchecked Call |
|   7 | Securify   |  |

## Eth_Tx_Order_Dependence_Minimal

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Transaction Order Dependence |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Short_Address_Example

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Tx Origin, Solidity Visibility |
|   7 | Securify   |  |

## Wallet_03_Wrong_Constructor

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Exception State |
|   2 | Slither    | External-Function |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Crypto_Roulette

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Overflow |
|   2 | Slither    | Arbitrary-Send, Constable-States, Deprecated-Standards, External-Function, Incorrect-Equality, Naming-Convention, Solc-Version, Uninitialized-Storage |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Upgrade To 050 |
|   7 | Securify   |  |

## The_Run

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Underflow, Multiple Calls, Transaction Order Dependence, Unchecked Call Return Value |
|   2 | Slither    | Calls-Loop, Constable-States, Deprecated-Standards, External-Function, Naming-Convention, Shadowing-Local, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Div Mul, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Revert Require, Solidity Unchecked Call, Solidity Visibility |
|   7 | Securify   |  |

## Phishable

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Use Of TxOrigin |
|   2 | Slither    | Arbitrary-Send, External-Function, Naming-Convention, Solc-Version, Tx-Origin |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Tx Origin, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Incorrect_Constructor_Name3

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Transaction Order Dependence |
|   2 | Slither    | External-Function, Naming-Convention |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Visibility |
|   7 | Securify   |  |

## Integer_Overflow_Multitx_Onefunc_Feasible

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Underflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     | Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data |
|   7 | Securify   |  |

## Integer_Overflow_Multitx_Multifunc_Feasible

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Underflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     | Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Visibility |
|   7 | Securify   |  |

## Integer_Overflow_Mapping_Sym_1

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Underflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     | Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Findthishash

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Integer Overflow |
|   2 | Slither    | Arbitrary-Send, Deprecated-Standards, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Upgrade To 050 |
|   7 | Securify   |  |

## Etheraffle

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Dependence On Predictable Environment Variable, Integer Overflow, Multiple Calls, Transaction Order Dependence |
|   2 | Slither    | Calls-Loop, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Array Length Manipulation, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Transfer In Loop, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Old_Blockhash

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Dependence On Predictable Environment Variable, Dependence On Predictable Variable, Integer Overflow |
|   2 | Slither    | External-Function, Naming-Convention |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## List_Dos

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Dependence On Predictable Environment Variable, Ether Send, Exception State, Integer Overflow, Multiple Calls, Transaction Order Dependence, Unchecked Call Return Value |
|   2 | Slither    | External-Function, Naming-Convention, Solc-Version, Timestamp |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Extra Gas In Loops, Solidity Functions Returns Type And No Return, Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Odds_And_Evens

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Ether Send, Exception State, Integer Overflow, Transaction Order Dependence, Unchecked Call Return Value |
|   2 | Slither    | Arbitrary-Send, Deprecated-Standards, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Revert Require, Solidity Visibility |
|   7 | Securify   |  |

## Bectoken

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | Constable-States, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Erc20 Approve, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Redundant Fallback Reject, Solidity Safemath, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Mycontract

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Use Of TxOrigin |
|   2 | Slither    | Arbitrary-Send, External-Function, Naming-Convention, Tx-Origin |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Tx Origin, Solidity Visibility |
|   7 | Securify   |  |

## Modifier_Reentrancy

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Message Call To External Contract |
|   2 | Slither    | External-Function, Naming-Convention, Unused-State |
|   3 | Oyente     | Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent, Max-Line-Length |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Guess_The_Random_Number

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Arbitrary-Send, Deprecated-Standards, External-Function, Incorrect-Equality, Naming-Convention, Solc-Version |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Balance Equality, Solidity Pragmas Version, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Dos_Number

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State, Integer Overflow |
|   2 | Slither    | External-Function |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Array Length Manipulation, Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Lottery

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | Deprecated-Standards, External-Function, Incorrect-Equality, Naming-Convention, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Deprecated Constructions, Solidity Extra Gas In Loops, Solidity Gas Limit In Loops, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Redundant Fallback Reject, Solidity Revert Require, Solidity Send, Solidity Visibility |
|   7 | Securify   |  |

## Erc20_Short_Address

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Exception State |
|   2 | Slither    | Erc20-Interface, External-Function, Solc-Version |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Pragmas Version, Solidity Visibility |
|   7 | Securify   |  |

## Lucky_Doubler

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Multiple Calls, Unchecked Call Return Value |
|   2 | Slither    | Deprecated-Standards, External-Function, Naming-Convention, Solc-Version |
|   3 | Oyente     | Callstack Depth Attack Vulnerability, Integer Overflow, Integer Underflow |
|   4 | Echidna    |  |
|   5 | Solhint    | Indent |
|   6 | Smartcheck | Solidity Address Hardcoded, Solidity Array Length Manipulation, Solidity Deprecated Constructions, Solidity Pragmas Version, Solidity Private Modifier Dont Hide Data, Solidity Revert Require, Solidity Upgrade To 050, Solidity Visibility |
|   7 | Securify   |  |

## Roulette

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    |  |
|   2 | Slither    | Arbitrary-Send, External-Function, Incorrect-Equality |
|   3 | Oyente     |  |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Exact Time, Solidity Locked Money, Solidity Pragmas Version, Solidity Upgrade To 050 |
|   7 | Securify   |  |

## Integer_Overflow_Add

|  #  | Tools      | Vulnerabilities |
| --- | ---------- | --------------- |
|   1 | Mythril    | Integer Overflow |
|   2 | Slither    | External-Function, Solc-Version |
|   3 | Oyente     | Integer Overflow |
|   4 | Echidna    |  |
|   5 | Solhint    |  |
|   6 | Smartcheck | Solidity Pragmas Version |
|   7 | Securify   |  |

