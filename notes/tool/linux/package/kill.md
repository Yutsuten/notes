---
title: Kill
---

## Kill

Kill processes by process ID.

```shell
kill PID  # Defaults to SIGTERM
kill -9 PID
kill -9 %JOBID
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
