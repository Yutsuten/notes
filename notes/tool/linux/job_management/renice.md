---
title: Renice
man: renice
ref: https://www.tecmint.com/set-linux-process-priority-using-nice-and-renice-commands/
---

## Overview

Alter priority of running processes.
Nice levels range from -20 (highest priority) to 19 (lowest priority).

- Negative nice levels require elevated rights (sudo).

Check the nice level of a running process with `top` or `ps -eO ni`.

## Usage

```shell
renice OPTION PID
```

| Option | Description |
| --- | --- |
| `-n` `--priority` | Specify integer N to the niceness of the process. |

### Example

Change nice level of a process to -5:

```shell
sudo renice -n -5 (pgrep wf-recorder)
```
