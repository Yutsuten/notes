---
title: Fdupes
man: fdupes
---

## Usage

Finds duplicate files in a given set of directories.

```shell
fdupes OPTIONS DIRS
```

| Option             | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| `-d` `--delete`    | Prompt user for files to preserve, deleting all others.             |
| `-r` `--recurse`   | For every directory given follow subdirectories encountered within. |
| `-I` `--immediate` | Delete duplicates as they are encountered.                          |

When deleting, use `-I` to just cleanup on the go.
If using the delete prompt,
confirm your choices by pressing the key `DELETE` at the end.

## Example

Search for duplicate files in the current directory:

```shell
fdupes .
```
