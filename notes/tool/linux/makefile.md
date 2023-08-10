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

## Shell commands
bold := $(shell tput bold)
reset := $(shell tput sgr0)

target: dependencies
	command
```

Before `command` you _must_ use a TAB character.

## Example

```makefile
.PHONY: all prepare build
my_var := hello

all: prepare build

prepare:
	@echo $(CURDIR)
	-command_that_may_fail
	prepare_command
	echo my_var

build:
	build_command
```
