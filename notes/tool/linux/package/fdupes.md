---
title: Fdupes
man: fdupes
---

## Usage

Finds duplicate files in a given set of directories.

```shell
fdupes OPTIONS DIRS
```

| Option | Description |
| --- | --- |
| `-d` `--delete` | Prompt user for files to preserve, deleting all others. |
| `-r` `--recurse` | For every directory given follow subdirectories encountered within. |

## Example

Search for duplicate files in the current directory:

```shell
fdupes .
```
