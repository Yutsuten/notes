---
title: Condition
ref: http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#if-expression
---

## If syntax

Conditions are evaluated by python.

```txt
*** Keywords ***
Do conditional
    IF    ${NUMBER} > 1 and ${BOOL} is ${False}
        Log    Greater than one.
    ELSE IF    $result is ${None}
        Log    The $variable syntax may be used to distinct str and None variables.
    ELSE IF    "${MYSTRING}" == "${EMPTY}" or "test" in "${MYSTRING}"
        Log    It's a dog!
    ELSE
        Log    Probably a cat.
    END
```
