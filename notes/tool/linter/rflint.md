---
title: Rflint
ref: https://github.com/boakley/robotframework-lint
---

## Usage

A static analyzer for robot framework plain text files.

```shell
rflint OPTIONS PATH
```

| Option | Description |
| --- | --- |
| `-r` `--recursive` | Recursively scan subfolders in a directory. |
| `-l` `--list` | Show a list of known rules and exit. |
| `-v` `--verbose` | Give verbose output. |

## Examples

Check all files in current directory.

```shell
rflint --recursive .
```

Check all rules and their descriptions.

```shell
rflint --list --verbose
```
