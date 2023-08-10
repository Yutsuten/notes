---
title: Cut
ref: https://man.archlinux.org/man/cut.1.en
---

## Usage

```shell
cut OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-d` `--delimiter` | Use the given delimiter instead of TAB for field delimiter. |
| `-f` `--fields` | select only these fields. |

## Example

```shell
echo 'refs/pull/123/merge' | cut -d / -f 3
```
