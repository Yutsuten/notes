---
title: Script
---

## Header

```shell
##!/bin/bash
```

## Read from pipe / stdin

`-t 0` is True if file descriptor is open and refers to a terminal.
The `cat -` outputs the input file.

```shell
if [[ ! -t 0 ]]; then
  stdin=$(cat -)
fi
```

Using the built-in `read`:

```shell
##!/bin/bash
while IFS= read -r line; do
  printf '%s\n' "$line"
done
```

## Eval

Evaluates a string as a shell command.

```shell
eval ${MYVAR}
```
