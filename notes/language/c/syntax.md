---
title: Syntax
---

## Basic input & output

Get input with `fgets()` or `scanf()`:

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

Print ASCII value of a char:

```c
#include <stdio.h>

int main() {
    char c = 'c';
    printf("Character %c has code %d", c, c);
    return 0;
}
```

## Comments

```c
// One line

/* Multi
line */
```
