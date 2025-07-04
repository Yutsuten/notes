---
title: Makefile
ref: http://web.mit.edu/gnu/doc/html/make_2.html
man: make
---

## Syntax

Declare Phony targets if you just want to declare some commands.

```makefile
.PHONY: target
my_var := hello

# Shell commands
bold := $(shell tput bold)
reset := $(shell tput sgr0)

target: dependencies
	command
```

Key points:

- Before `command` a TAB character is **required**
- There are two valid syntaxes for using variables: `$(my_var)` and `${my_var}`
- The same syntax is applied to environment variables

## Example

```makefile
.PHONY: all prepare build
my_var := hello

all: prepare build

prepare:
	@echo $(CURDIR)
	-command_that_may_fail
	prepare_command
	echo $(my_var)

build:
	build_command
```
