---
title: Debug
ref: https://sourceware.org/gdb/current/onlinedocs/gdb#Running
---

## Gdb

The binary must be compiled with `-g`.

If using a more complex Makefile, use `CFLAGS = -g -O0`
(See [compile](/language/c/compile)).

```shell
gcc -g -o myapp main.c
```

Start gdb with the app and optionally a core dump file.

```shell
gdb myapp
gdb myapp core
```

:::tip
Check where core dumps are created in your system by seeing the contents of
`/proc/sys/kernel/core_pattern`.

The command `ulimit -c unlimited` may also be useful.
:::

The most commonly used commands are:

| Command | Description |
| --- | --- |
| `b` `break` | Set breakpoint at specified location. Assign location as `script.c:10` `func_name` ([see more here](http://www.gdbtutorial.com/gdb-breakpoints-example)) |
| `r` `run` | Start execution. |
| `p` `print` | Print value of expression `EXPR`. |
| `n` `next` `nexti` | Execute next line (step-over). |
| `s` `step` `stepi` | Execute subroutine (step-into). |
| `fin` `finish` | Execute until selected stack frame returns (step-out). |
| `u` `until` | Execute until past the current line, useful for loops. |
| `c` `continue` | Continue program until it finishes or until next breakpoint. |
