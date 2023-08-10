---
title: Syntax
ref: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html
---

## Test suite

```txt
*** Settings ***
Documentation     Script documentation
Library           SeleniumLibrary
Suite Setup       Start Suite
Suite Teardown    Finish Suite
Test Setup        Start Application
Test Teardown     Close Application

*** Variables ***
${STRING} =    My string

*** Test Cases ***
Test Home Page
    [Documentation]    Test my home page.
    [Setup]       Override Setup
    [Teardown]    Override Teardown
    My Keyword    Argument

Stop Suite If Fails
    [Documentation]    Stop the whole suite execution if it fails
    [Teardown]    Run Keyword If Test Failed    Fatal Error
    My Keyword    Argument
```

## Resource file

```txt
*** Settings ***
Documentation    Script documentation
Library          SeleniumLibrary

*** Keywords ***
My Keyword
    [Arguments]    ${arg1}
    [Documentation]    Descriptive explanation of the keyword.
    Do Something Cool

Keyword With Arbitrary Number Of Arguments
    [Arguments]    @{args}
    Do Something Cool
```
