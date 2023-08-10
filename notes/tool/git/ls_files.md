---
title: Ls files
man: git-ls-files
---

## Usage

Show information about files in the index and the working tree.

```shell
git ls-files OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `--error-unmatch` | If any FILE does not appear in the index, treat this as an error (return 1). |

## Example

Check if a file is being tracked by git.

```shell
git ls-files --error-unmatch src/file.txt
```
