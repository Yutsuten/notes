---
title: Bg
man: bg
---

## Usage

The `bg` builtin sends the specified job to the background, resuming them if they are stopped.
If no job is specified, the last job is chosen.

```shell
bg JOB
```

_Note: Stop the current foreground job with `Ctrl + Z`._

### Example

```shell
bg 1   # bash
bg %1  # fish
```
