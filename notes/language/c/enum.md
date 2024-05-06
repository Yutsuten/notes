---
title: Enum
ref: https://www.programiz.com/c-programming/c-enumeration
---

## Basic usage

Create an enum:

```c
enum Bool {
    FALSE,  // 0
    TRUE,   // 1
};
```

Access its values:

```c
FALSE
TRUE
```

Initialize values of an enum:

```c
enum Log {
    DEBUG = 10,
    INFO = 20,
    WARNING = 30,
    ERROR = 40,
    CRITICAL = 50,
};
```

## Examples

```c
#include <stdio.h>

enum Bool {
    FALSE,  // 0
    TRUE,   // 1
};

enum Log {
    DEBUG = 10,
    INFO = 20,
    WARNING = 30,
    ERROR = 40,
    CRITICAL = 50,
};

int main() {
    printf("Bool TRUE = %d\n", TRUE);
    printf("Log ERROR = %d\n", ERROR);
    enum Log active_log = INFO;
    printf("Active log level = %d\n", active_log);
    return 0;
}
```
