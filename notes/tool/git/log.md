---
title: Log
man: git-log
---

## Usage

Show the latest commits.

```shell
git log OPTIONS
```

| Option           | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `-n`             | Output only the last N commits.                        |
| `-1`             | Output only the last commit.                           |
| `-L`             | Get the logs of the given line range and file.         |
| `--oneline`      | Abbreviate commit messages to one line.                |
| `--merges`       | Output only merge commits.                             |
| `--full-history` | Do not prune some history.                             |
| `--follow`       | Continue listing the history of a file beyond renames. |

## Examples

Show full history of a file.

```shell
git log --follow -- filename
```

Show full history in a line range of a file.

```shell
git log -L25,+1:'path/file.txt'
```

Find a commit that deleted a file.

```shell
git log --full-history -1 -- path/deleted_file
```
