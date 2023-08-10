---
title: Ls
---

## Usage

```shell
ls OPTIONS PATH
-l  # Full output
-a  # Include hidden files
-A  # Include hidden files (except . and ..)
-F  # Show special characters (as / for folders)
-1  # One file/directory per line

--group-directories-first
```

## Examples

```shell
ls
ls -la
ls -lF
ls -1 | wc -l
```
