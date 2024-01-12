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

Split by `/`, get the 3rd element.

```shell
echo 'refs/pull/123/merge' | cut -d / -f 3
```

Remove first 2 characters (start from 3th character).

```shell
echo '1234567890' | cut -c 3-
```
