---
title: Du
---

## Usage

Estimate file space usage.

```shell
du OPTION FILE
```

| Option | Description |
| --- | --- |
| `-a` `--all` | Print file sizes too. |
| `--apparent-size` | Print apparent sizes rather than device usage. |
| `-c` `--total` | Produce a grand total. |
| `-d` `--max-depth` | Go up to the specified depth. |
| `-h` `--human-readable` | Print sizes in powers of 1024. |
| `--si` | Print sizes in powers of 1000. |
| `-s` `--summarize` | Display only a total for each argument. |

## Examples

Size of a folder:

```shell
du -sh folder
```

Find the 5 biggest files:

```shell
find . -type f -exec du -h '{}' \+ | sort -hr | head -n 5
```
