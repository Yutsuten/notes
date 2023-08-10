---
title: Paste
ref: https://man.archlinux.org/man/paste.1.en
---

## Usage

Merge lines of files.

```shell
paste OPTIONS FILES
```

| Option | Description |
| --- | --- |
| `-p` | Use the specified character to merge instead of TABs. |

## Example

Merge lines of `variables.txt` with `values.txt`:

```shell
paste -p " " variables.txt values.txt > assignment.txt
```
