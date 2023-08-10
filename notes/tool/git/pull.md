---
title: Pull
ref: https://man.archlinux.org/man/git-pull.1.en
---

## Usage

```shell
git pull OPTIONS REMOTE BRANCH
```

| Option | Description |
| --- | --- |
| `--rebase` | Rebase the current branch on top of the upstream branch. |
| `--recurse-submodules` | Update submodules to the latest commit. |

## Example

Pull code with submodules:

```shell
git pull --recurse-submodules
```
