---
title: Od
man: od
---

## Basic usage

Dump files in octal and other formats.

```shell
od OPTION FILE
```

| Option | Description |
| --- | --- |
| `-A` `--address-radix` | Output format for file offsets; RADIX is one of `doxn`, for Decimal, Octal, Hex or None. |
| `-t` `--format` | Select output format or formats. |
| `-v` `--output-duplicates` | Do not use * to mark line suppression. |

## Example

Display hexdump format output:

```shell
od -A x -t x1z -v BINFILE
```
