---
title: Compile
---

## Single file

Most basic command for compiling:

```shell
gcc myapp.c -o myapp
```

For development adding some options may help debugging:

```shell
gcc -Wall -Wextra -Werror myapp.c -o myapp
```

## Makefile

```shell
all: build run

build:
	gcc -Wall -Wextra -Werror myapp.c -o myapp

run:
	./myapp
```
