---
title: Clone
ref: https://man.archlinux.org/man/git-clone.1.en
---

## Usage

```shell
git clone OPTIONS REPO_URL DIR
```

| Option | Description |
| --- | --- |
| `--recurse-submodules` | Initialize and clone submodules. |
| `--remote-submodules` | Update submodules to the latest commit. |

## Example

Clone code with submodules:

```shell
git clone --recurse-submodules
```
