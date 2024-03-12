---
title: Update index
man: git-update-index
---

## Hide/show modified files

```shell
git update-index --skip-worktree FILES
git update-index --no-skip-worktree FILES

## List currently hidden files
git ls-files -v . | grep ^S
```
