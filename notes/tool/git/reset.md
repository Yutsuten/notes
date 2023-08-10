---
title: Reset
---

```shell
## Move HEAD to a specified commit (default HEAD)
git reset <commit sha1>

## Hard: change files as it was in that commit
git reset --hard <commit sha1>

## Soft: Leave the files as is, so only changes the HEAD
git reset --soft <commit sha1>

## Undo last commit
git reset --soft HEAD~1
```
