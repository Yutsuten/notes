---
title: Branch
---

```shell
## Create new branch
git checkout -b new-feature

## Change to another branch
git checkout another-feature

## Change to remote branch
git checkout feature # Only newer versions
git checkout -b feature origin/feature
git checkout --track origin/feature

## See all branches
git branch

## Delete branch
git branch -d another-feature

## Delete branch in remote
git push origin -d another-feature
```

## Moving recent commits to new branch

```shell
git branch newbranch      # Create a new branch, saving the desired commits
git stash
git reset --hard HEAD~3   # Move master back by 3 commits (GONE from master)
git pop
```
