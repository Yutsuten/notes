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

```make
CC = gcc
CFLAGS = -Wall -Wextra -Werror $(EXTRA_CFLAGS)
OBJ = main.o mylib.o
TARGET = myapp

.PHONY: build clean

build: $(OBJ)
	$(CC) -o $(TARGET) $(CFLAGS) $(OBJ)

mylib.o: mylib.h

clean:
	rm -f $(TARGET) $(OBJ)
```

Build with `make EXTRA_CFLAGS='-g -O0'` to enable debugging with `gdb`.

Bellow another example [with hardening options enabled](https://best.openssf.org/Compiler-Hardening-Guides/Compiler-Options-Hardening-Guide-for-C-and-C++.html):

```make
CC = gcc
CFLAGS = -march=native -flto -Wall -Wextra -Wformat=2 -Wconversion -Wimplicit-fallthrough -Werror=format-security -Wl,-z,nodlopen -Wl,-z,noexecstack -Wl,-z,relro -Wl,-z,now -Wl,--as-needed -Wl,--no-copy-dt-needed-entries -Wtrampolines -Wbidi-chars=any -Werror=implicit -Werror=incompatible-pointer-types -Werror=int-conversion
CLIBFLAGS = -fPIC -shared
CDEVFLAGS = -g -O0 -Werror
CPRODFLAGS = -s -O2

DEBUG_DIR = target/debug
RELEASE_DIR = target/release
OBJ = src/main.o
TARGET = myapp

.PHONY: build release clean

build: $(OBJ)
	mkdir -p $(DEBUG_DIR)
	$(CC) -o $(DEBUG_DIR)/$(TARGET) $(CDEVFLAGS) $(CFLAGS) $(OBJ)

release: $(OBJ)
	mkdir -p $(RELEASE_DIR)
	$(CC) -o $(RELEASE_DIR)/$(TARGET) $(CPRODFLAGS) $(CFLAGS) $(OBJ)

clean:
	rm -f $(DEBUG_DIR)/$(TARGET) $(RELEASE_DIR)/$(TARGET) $(OBJ)
```

## CMake

- [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/README.html)

There are two steps to set up a project for CMake usage.

### Add files

First you need to place (at least) two files to your project.

```txt
CMakeLists.txt
src
└── main.c
```

- `src/main.c` is a C program that compiles
- `CMakeLists.txt` is the project's configuration

A very simple `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.24)

# Project structure
project(myapp
        VERSION 0.1.0
        LANGUAGES C)
add_executable(myapp src/main.c)

# Installation
install(TARGETS myapp DESTINATION bin)
```

`myapp` here will be name of the binary generated.

### Build

Considering a build that will use:

| Directory        | Purpose        |
| ---------------- | -------------- |
| `target/debug`   | Debug builds   |
| `target/release` | Release builds |

First we create the build directories
that includes some build configuration like the compiler and a generator.
These commands have to be run only once.

```shell
cmake -GNinja -DCMAKE_BUILD_TYPE:STRING=Debug -S. -Btarget/debug
cmake -GNinja -DCMAKE_INSTALL_PREFIX:STRING=$HOME/.local -DCMAKE_BUILD_TYPE:STRING=Release -S. -Btarget/release
```

Then, for a debug build & run:

```shell
cmake --build target/debug
./target/debug/myapp
```

For a release build & install
(this will install the binary into `~/.local/bin` because we have `CMAKE_INSTALL_PREFIX` set):

```shell
cmake --build target/release
cmake --install target/release --strip
```

To uninstall:

```shell
xargs -d '\n' rm -v <target/release/install_manifest.txt
```
