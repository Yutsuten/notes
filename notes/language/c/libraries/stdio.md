---
title: Stdio
---

## Basic input & output

| Purpose | Function | Description |
| --- | --- | --- |
| Input | `scanf()` | Read any kind of variable, syntax is similar to `printf`. Reading strings is tricky. |
| Input | `fgets()` | Read strings. New line included. |
| Output | `printf()` | Output to stdout in the format specified. |
| Output | `puts()` | Display string + a new line. |

```c
#include <stdio.h>

int main(int argc, char *args[]) {
    char name[20];
    int age;
    printf("Your name: ");
    fgets(name, 20, stdin);
    printf("Your age: ");
    scanf("%d", &age);
    printf("Hello %s, you are %d years old.\n", name, age);
    return 0;
}
```
