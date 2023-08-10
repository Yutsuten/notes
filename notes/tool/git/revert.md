---
title: Revert
---

## Reverting a merge

```shell
## It is necessary to check both parents, and choose the parent you want to revert to.
## By experience, sometimes you'll need 1 and others 2, so there is no easy rule to remember.
git revert -m 1 hash  # Revert to parent 1
git revert -m 2 hash  # Revert to parent 2
```
