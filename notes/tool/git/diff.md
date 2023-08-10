---
title: Diff
ref: https://linux.die.net/man/1/git-diff
---

## Usage

```shell
git diff OPTIONS COMMIT -- PATH
```

| Option | Description |
| --- | --- |
| `--cached` `--staged` | Show changes in the staging area. |
| `--word-diff` | Change to show word diff mode. |
| `--stat` | Generate a diffstat. |
| `--no-index` | Compare two files outside a git repository. |

| Commit | Description |
| --- | --- |
| `COMM1 COMM2` | Difference between two arbitrary commits. |
| `HEAD~N` | Difference between the previous commit and the working tree. |
| `HEAD~N..` `HEAD~N..HEAD` | Difference between a recent commit and the latest commit. |
| `HEAD~N..HEAD~M` | Difference between two recent commits. |

## Example

Compare uncommited changes in file `foo` with another branch.

```shell
git diff master:foo foo
```
