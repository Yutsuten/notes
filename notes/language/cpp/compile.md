---
title: Compile
ref: https://www.gyata.ai/c-plus-plus/makefile
man: g++
---

## Single file

Most basic command for compiling:

```shell
g++ -o myapp main.cpp
```

Adding some options may help debugging for development:

```shell
g++ -o myapp -Wall -Wextra -Werror main.cpp
```

Example of a hello world program:

```cpp
#include <iostream>
 
int main()
{
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```

For more printing features, use the `fmt` library
(add `-lfmt` to `CFLAGS`) and write the code like this:

```cpp
#include <fmt/base.h>

int main() {
    fmt::print("Hello, world!\n");
    return 0;
}
```

## Makefile

We have to teach `Makefile` how to compile `.cpp` files into `.o` files.
This step is not needed in C, but needed in C++.

:::tip
As for the time this is being written,
`gnu++17` is the default for `g++`.

Enable newer features by adding `-std=c++20` or `-std=c++23` into `CFLAGS`.
:::

```make
CXX = g++
CXXFLAGS = -Wall -Wextra -Werror $(EXTRA_CFLAGS)
OBJ = main.o
TARGET = myapp

.PHONY: build clean

build: $(OBJ)
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(OBJ)

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(TARGET) $(OBJ)
```

## CMake

- [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/README.html)

There are two steps to set up a project for CMake usage.

### Add files

First you need to place (at least) two files to your project.

```txt
CMakeLists.txt
src
└── main.cpp
```

- `src/main.cpp` is a C++ program that compiles
- `CMakeLists.txt` is the project's configuration

A very simple `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.24)

# Project structure
project(myapp
        VERSION 0.1.0
        LANGUAGES CXX)
add_executable(myapp src/main.cpp)

# Dependencies
find_package(fmt REQUIRED)
target_link_libraries(myapp PRIVATE fmt::fmt)

# Installation
install(TARGETS myapp DESTINATION bin)
```

`myapp` here will be name of the binary generated.

This example is also showing to add a library (fmt) as dependency.

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
