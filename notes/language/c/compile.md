---
title: Compile
ref: https://web.mit.edu/gnu/doc/html/make_2.html
---

## Single file

Most basic command for compiling:

```shell
gcc -o myapp main.c
```

Adding some options may help debugging for development:

```shell
gcc -o myapp -Wall -Wextra -Werror main.c
```

## Multiple files

When creating header files, the structure of the files is like this:

```txt
main.c
mylib.h
mylib.c
```

Contents of `mylib.h`

```c
#ifndef MYLIB_H
#define MYLIB_H

void custom_function(char text[]);

#endif
```

Contents of `mylib.c`

```c
#include <stdio.h>

void custom_function(char text[]) {
    printf("Custom function was called with '%s'!\n", text);
}
```

Import `mylib.h` from `main.c`

```c
#include "mylib.h"

int main() {
    char text[] = "Hello World!";
    custom_function(text);
    return 0;
}
```

## Makefile

Single file, compile direct to executable.

```shell
build:
	gcc -o myapp -Wall -Wextra -Werror main.c
```

Multiple files, generating object files before executable.

```shell
CC = gcc
OBJ = main.o mylib.o

build: $(OBJ)
	gcc -o myapp -Wall -Wextra -Werror $(OBJ)

mylib.o: mylib.h

.PHONY: clean
clean:
	-rm -f myapp $(OBJ)
```
