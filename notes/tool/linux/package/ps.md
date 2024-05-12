---
title: Ps
man: ps
---

## Usage

Report a snapshot of the current processes.

```shell
ps OPTIONS
```

| Option | Description |
| --- | --- |
| `a` | List all processes with a terminal (tty), or all processes if used with the `x` option.. |
| `u` | Display user-oriented format. |
| `x` | Lift the BSD-style "must have a tty" restriction. |
| `-A` `-e` | Select all processes. |
| `-f` | Do full-format listing. |
| `-O` | Add new columns to the output. Ex: `ppid` `ni` (nice) |
| `-o` | Customize columns to be shown. Ex: `pid` `comm` |

## Examples

See only processes started in this shell:

```shell
ps
```

See all running processes with arguments:

```shell
ps aux
ps -ef
```

Check nice value of running processes:

```shell
ps -eO ni
ps -eo pid,ni,comm
```
