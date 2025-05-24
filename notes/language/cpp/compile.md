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
CC = g++
CFLAGS = -Wall -Wextra -Werror $(EXTRA_CFLAGS)
OBJ = main.o
TARGET = myapp

.PHONY: build clean

build: $(OBJ)
	$(CC) $(CFLAGS) -o $(TARGET) $(OBJ)

%.o: %.cpp
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(TARGET) $(OBJ)
```

## CMake

[Learning CMake](https://cliutils.gitlab.io/modern-cmake/README.html)
might be a good idea.
