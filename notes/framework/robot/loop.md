---
title: Loop
ref: http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#for-loops
---

## While syntax

```txt
*** Test Cases ***
Example Infinite Loop
    WHILE    True    until=1 hour
        Do Something
    END
```

## For syntax

```txt
*** Test Cases ***
Example Inline
    FOR    ${animal}    IN    cat    dog
        Log    ${animal}
    END
```

For list variables,
prepend it with `@`.

```txt
*** Test Cases ***
Example List Variable
    FOR    ${element}    IN    @{ELEMENTS}
        Log    ${element}
        # Robot < 5
        Exit For Loop If    condition
        IF    condition
            Exit For Loop
        END
        # Robot >= 5
        IF    condition    BREAK
    END
```

### In-range

```txt
*** Test Cases ***
Only upper limit
    [Documentation]    Loops over values from 0 to 9
    FOR    ${index}    IN RANGE    10
        Log    ${index}
    END
```
