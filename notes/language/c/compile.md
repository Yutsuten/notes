---
title: Compile
---

## Single script

```shell
gcc mainscript.c -o mybinary
```

## Sample Makefile

```shell
all: build run

build:
	gcc main.c -o program

run:
	konsole -e 'bash -c "./program; echo -e \"\nProgram finished with status code $$?.\nPress [Enter] to continue.\"; read"' &
```
