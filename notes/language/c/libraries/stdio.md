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

## File manipulation

Functions to manipulate content of files:

| File operation | Function |
| --- | --- |
| Open | `fopen("path/file", "mode")` |
| Seek | `fseek(FILE*, offset, SEEK_SET \| SEEK_END \| SEEK_CUR)` |
| Close | `fclose(FILE*)` |

| File type | Read function | Write function |
| --- | --- | --- |
| Text | `fscanf(FILE*, ...)` | `fprintf(FILE*, ...)` |
| Binary | `fread(data*, size, times, FILE*)` | `fwrite(data*, size, times, FILE*)` |

When opening a file, there are 3 basic open modes:

| Mode | Use | Create file | Keep contents |
| --- | --- | --- | --- |
| `r` `rb` | Reading | ✘ | ✔ |
| `w` `wb` | Writing | ✔ | ✘ |
| `a` `ab` | Appending | ✔ | ✔ |

You can also append a `+` (ex: `wb+`) so both read and write are available.
The behavior of "Create file" and "Keep contents" is kept.

Example of reading and writing to **text** file.

```c
#include <stdio.h>

int main() {
    char filename[] = "salary.txt";
    int salary;
    FILE *file = fopen(filename, "r");
    if (file) {
        fscanf(file, "%d", &salary);
        printf("Your salary was $%d per month.\n", salary);
        fclose(file);
    }
    printf("Your new salary: ");
    scanf("%d", &salary);
    printf("I'll remember your new salary of $%d\nSee you later!", salary);
    file = fopen(filename, "w");
    fprintf(file, "%d", salary);
    fclose(file);
    return 0;
}
```

Example of reading and writing to **binary** file.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char filename[] = "username.save";
    char user[50];
    FILE *file = fopen(filename, "rb");
    if (file) {
        fread(user, sizeof(user), 1, file);
        printf("Welcome back %s", user);
        fclose(file);
    }
    printf("Your new user name: ");
    fgets(user, 50, stdin);
    printf("I'll remember your user name, %sSee you later!", user);
    file = fopen(filename, "wb");
    fwrite(user, strlen(user), 1, file);
    fclose(file);
    return 0;
}
```
