---
title: Pgrep
man: pgrep
---

## Usage

Matches PATTERN against currently running **process names**.

```shell
pgrep OPTIONS PATTERN
```

| Option             | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `-l` `--list-name` | Print PID and process name.                             |
| `-a` `--list-full` | Print PID and the full command line.                    |
| `-f` `--full`      | Makes PATTERN match the full command line instead.      |
| `-x` `--exact`     | Only match processes whose names exactly match PATTERN. |
