---
title: Dictionary
ref: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#dictionary-variable-syntax
---

## Usage

Define dictionary for script:

```txt
*** Variables ***
&{DICTIONARY} =    string=${STRING}    number=${NUMBER}    list=@{LIST}
```

Define and usage inside test cases:

```txt
*** Test Cases ***
Create a dictionary variable
    &{dictionary} =    Create Dictionary    key1=value1    key2=value2
    Log    ${dictionary}    # {'key1': 'value1', 'key2': 'value2'}
    Log    ${dictionary}[key1]    # value1
    Log    ${dictionary.key2}    # value2
```
