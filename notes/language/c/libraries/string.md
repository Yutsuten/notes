---
title: String
ref: https://cplusplus.com/reference/cstring/
---

## Available functions

| Function | Description |
| --- | --- |
| `strlen(str)` | Computes string's length. |
| `strcpy(dest, src)` | Copies a string to another. |
| `strcat(dest, src)` | Concatenates two strings. |
| `strcmp(str1, str2)` | Return `0` means equal, `<0` or `>0` means str1 is before or after str2 in alphabetic order. |

```c
#include <stdio.h>
#include <string.h>

int main() {
    char name1[20] = "Sora";
    char name2[20] = "Hime";
    printf("Length of '%s' is %lu.\nLength of '%s' is %lu.\n", name1, strlen(name1), name2, strlen(name2));
    char name1copy[20];
    strcpy(name1copy, name1);
    strcat(name1copy, name2);
    printf("Concatenate result: '%s'.\n", name1copy);
    return 0;
}
```
