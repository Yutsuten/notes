---
title: Index
---

## Hide/show modified files

```shell
git update-index --skip-worktree <files>
git update-index --no-skip-worktree <files>

## List currently hidden files
git ls-files -v . | grep ^S
```
