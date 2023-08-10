---
title: List
ref: https://robotframework.org/robotframework/
---

## Usage

Define list for script:

```txt
*** Variables ***
@{LIST} =    one    two    three
```

Define and usage inside test cases:

```txt
*** Test Cases ***
Create a list variable
    @{alphabets} =    Create List    a    b    c
    Append To List    ${alphabets}    d
```
