---
title: Lsblk
man: lsblk
---

## Usage

```shell
lsblk OPTIONS DEVICE
```

| Option | Description |
| --- | --- |
| `-o` | Specify which output columns to print. Extend default list with the `+column` syntax. |
| `--help` | Get full list of options and available columns. |

## Example

Check file system of all connected storage devices.

```shell
lsblk -o +FSTYPE
```
