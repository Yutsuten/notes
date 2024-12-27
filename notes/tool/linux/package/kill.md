---
title: Kill
---

## Kill

Kill processes by process ID.

```shell
kill OPTIONS PID
```

| Option          | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| `-s` `--signal` | The signal to send. It may be given as a name or a number. Use 0 to just run the validations. |
| `-l` `--list`   | Print a list of signal names, or convert the given signal number to a name.                   |
| `-L` `--table`  | Pretty print a table of signal names and numbers.                                             |

Examples:

```shell
kill PID     # Defaults to `-s 15` (SIGTERM)
kill -9 PID  # Same as `-s 9` (SIGKILL)
kill -9 %JOBID
```

Check if a process is still running.

```shell
kill -0 PID
```

## Pkill

Kill processes by process name (pattern).
Use `pgrep` for a preview of what processes will be killed.

```shell
pkill PNAME
```

## Killall

Kill processes by process name (exact).

```shell
killall PNAME
```

## Xkill

Kill process by clicking its window.

```shell
xkill
```
