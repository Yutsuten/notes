---
title: Variables
ref: http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables
---

## System variables

| Variable | Explanation
| --- | --- |
| `${CURDIR}` | An absolute path to the directory where the test data file is located. |
| `${TEMPDIR}` | An absolute path to the system temporary directory. |
| `${EXECDIR}` | An absolute path to the directory where test execution was started from. |
| `${/}` | The system directory path separator. `/` in UNIX-like systems and `\` in Windows. |
| `${:}` | The system path element separator. `:` in UNIX-like systems and `;` in Windows. |
| `${\n}` | The system line separator. `\n` in UNIX-like systems and `\r\n` in Windows. |

## Script variables

```txt
*** Variables ***
${STRING} =        cat
${NUMBER} =        ${1}
${BOOLEAN} =       ${True}
@{LIST} =          one    two    three
&{DICTIONARY} =    string=${STRING}    number=${NUMBER}    list=@{LIST}
${ENVIRONMENT_VARIABLE} =    %{PATH=Default value}
```

## Assignment

```txt
*** Keywords ***
Assign String To Variable
    ${variable_name} =    Set Variable    Hello, world!
    ${variable_name} =    Some Keyword
```

## Extended variable syntax

[External documentation](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#extended-variable-syntax)

```txt
*** Keywords ***
Remove Whitespaces From Variable
    Log    ${myvar.strip()}
```
