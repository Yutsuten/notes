---
title: Add
man: git-add
---

## Usage

```shell
git add OPTIONS PATH
```

| Option         | Description                           |
| -------------- | ------------------------------------- |
| `-f` `--force` | Allow adding otherwise ignored files. |
| `-p` `--patch` | Interactively choose hunks of patch.  |

### Patch

While patching, send `?` to see the help.
Some often used options:

| Option | Description                                                   |
| ------ | ------------------------------------------------------------- |
| `y`    | Stage this hunk.                                              |
| `n`    | Do not stage this hunk.                                       |
| `q`    | Quit; do not stage this hunk or any of the remaining ones.    |
| `a`    | Stage this hunk and all later hunks in the file.              |
| `d`    | Do not stage this hunk or any of the later hunks in the file. |
| `s`    | Split the current hunk into smaller hunks.                    |
| `e`    | Manually edit the current hunk.                               |

## Examples

```shell
git add .             # Add all
git add directory/    # Add all files inside a directory
git add path/to/file  # Add single file
git add -p file       # Add only part of the file (--patch)
```
