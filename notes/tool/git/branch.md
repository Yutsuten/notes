---
title: Branch
man: git-branch
ref: https://git-scm.com/docs/git-branch
---

## Usage

:::tip
To switch branches, use `git switch`.
To update/delete remote branches, use `git push`.
:::

List, create or delete local branches.

```shell
git branch OPTIONS BRANCH
```

| Option          | Description            |
| --------------- | ---------------------- |
| `-d` `--delete` | Delete a branch.       |
| `-D`            | Force delete a branch. |
| `-m` `--move`   | Move/rename a branch.  |

## Examples

List branches:

```shell
git branch
```

Delete a branch:

```shell
git branch -d feature-branch
```

Moving recent commits to a new branch:

```shell
git branch newbranch      # Create a new branch, saving the desired commits
git stash
git reset --hard HEAD~3   # Move master back by 3 commits
git pop
```
