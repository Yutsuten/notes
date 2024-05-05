---
title: Union
ref: https://www.programiz.com/c-programming/c-unions
---

## Basic usage

Members of unions share the same memory.
Used if only one member at time is needed,
or for low level memory optimizations.

```c
union Person {
    char name[8];
    long age;
};
```

## Examples

Union `Person` that shares the same memory for `name` and `age`.
Size is 8 bytes as union, but would be 16 if it were struct.

```c
#include <stdio.h>
#include <string.h>

union Person {
    char name[8];
    long age;
};

int main() {
    union Person user;
    printf("Size of user: %lu. Size of user.name: %lu. Size of user.age: %lu.\n", sizeof(user), sizeof(user.name), sizeof(user.age));
    strcpy(user.name, "Yuki");
    printf("Value of user.name: %s. Value of user.age: %ld.\n", user.name, user.age);
    user.age = 18;
    printf("Value of user.name: %s. Value of user.age: %ld.\n", user.name, user.age);
    return 0;
}
```

Changing the bytes individually of a bigger variable.
[See more examples here.](https://stackoverflow.com/questions/252552/why-do-we-need-c-unions)

```c
#include <stdio.h>

union HW_Register {
    struct {
        unsigned char byte4;
        unsigned char byte3;
        unsigned char byte2;
        unsigned char byte1;
    } bytes;
    unsigned int dword;
};

int main() {
    union HW_Register reg;
    reg.dword = 0x12345678;
    printf("Dword: %08x\nByte1: %d, Byte2: %d, Byte3: %d, Byte4: %d\n", reg.dword, reg.bytes.byte1, reg.bytes.byte2, reg.bytes.byte3, reg.bytes.byte4);
    reg.bytes.byte1 = 0;
    reg.bytes.byte3 = 0;
    printf("Dword: %08x\nByte1: %d, Byte2: %d, Byte3: %d, Byte4: %d\n", reg.dword, reg.bytes.byte1, reg.bytes.byte2, reg.bytes.byte3, reg.bytes.byte4);
    return 0;
}
```
