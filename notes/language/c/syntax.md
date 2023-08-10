---
title: Syntax
---

## Basic input & output

```c
##include <stdio.h>

int main(int argc, char *args[]) {
    char name[20];
    printf("Your name: ");
    fgets(name, 20, stdin);
    printf("Hello %s", name);
    return 0;
}
```
