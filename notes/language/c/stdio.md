---
title: Stdio
---

## Basic input & output

Get input with `fgets()` or `scanf()`,
print to stdout with `printf()`:

```c
#include <stdio.h>

int main(int argc, char *args[]) {
    char name[20];
    int age;
    printf("Your name: ");
    fgets(name, 20, stdin);
    printf("Your age: ");
    scanf("%d", &age);
    printf("Hello %s, you are %d years old.", name, age);
    return 0;
}
```
