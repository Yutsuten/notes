---
title: Strace
man: strace
---

## Usage

It intercepts and records the system calls which are called by a process and the signals which are
received by a process.

```shell
strace OPTIONS
```

| Option | Description |
| --- | --- |
| `-p` `--attach` | Attach to the given PID and begin tracing. |
