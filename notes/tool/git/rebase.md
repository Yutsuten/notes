---
title: Rebase
---

Rebase is about rewriting history.

## Usage

The first step is to find the previous commit to the one you want to edit.

`A-B-C-D-E-F`

If you want to edit C and D, for example,
specify B to `git rebase`

```shell
git rebase -i B
git rebase -i --root  # To edit A
```

Change the lines for C and D from `pick` to `edit`.

For each commit, amend your changes,
and continue the rebase until it finishes.

```shell
git commit --amend
git rebase --continue
```
