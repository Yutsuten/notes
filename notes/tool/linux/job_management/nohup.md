---
title: Nohup
man: nohup
ref: https://phoenixnap.com/kb/linux-nohup
---

## Overview

Run a command immune to hangups, with output to a non-tty.

## Usage

```shell
nohup COMMAND
```

Avoid sending `SIGHUP` to a process when closing PTY.
If no output file is specified, defaults to `nohup.out`.

### Examples

```shell
nohup command > output 2>&1 &  # bash
nohup command &> output &      # fish
```
