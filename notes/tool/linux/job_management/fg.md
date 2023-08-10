---
title: Fg
man: fg
---

## Usage

The `fg` builtin brings the specified job to the foreground, resuming them if they are stopped.
If no job is specified, the last job is chosen.

```shell
fg JOB
```

_Note: Stop the current foreground job with `Ctrl + Z`._

### Example

```shell
fg 1   # bash
fg %1  # fish
```
