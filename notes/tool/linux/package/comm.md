---
title: Comm
man: comm
---

## Usage

Compare two sorted files line by line.

```shell
comm OPTIONS FILE1 FILE2
```

| Option | Description |
| --- | --- |
| `-1` | Suppress column 1 (lines unique to FILE1) |
| `-2` | Suppress column 2 (lines unique to FILE2) |
| `-3` | Suppress column 3 (lines that appear in both files) |

## Example

Show unique lines of FILE1:

```shell
comm -23 file1 file2
```
