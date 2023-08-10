---
title: Selenium
ref: https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html
---

## Examples

```txt
*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Test Some Page
    [Documentation]    This is the documentation.
    [Tags]    Dummy
    [Timeout]    180
    Page Should Contain Element    xpath://tbody/tr
    Page Should Not Contain Element    xpath://div[@class="bug"]
    Input Text    xpath://input[@type="search"]  hello
    Clear Element    Text xpath://input[@type="search"]
```
