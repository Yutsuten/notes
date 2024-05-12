---
title: Merge
ref: https://git-scm.com/docs/git-merge
---

## Usage

Merges a source branch into the current branch.

```shell
git merge OPTIONS SOURCE_BRANCH
```

| Option | Description |
| --- | --- |
| `--squash` | Perform the merge but do not commit. |
| `--no-ff` | Force creating a merge commit. |
| `-s` `--strategy` | Use the given [merge strategy](https://git-scm.com/docs/git-merge#_merge_strategies). |
| `--abort` | Abort a merge with conflicts. |

## Examples

### Conflict resolution

Make sure all conflicts were resolved by running:

```shell
git grep -HE '<{7} HEAD'
```

To commit with the default merge message:

```shell
git commit --no-edit
```

### Overwrite branch

Using `-s ours` discards everything the other tree did,
declaring our history contains all that happened in it.

Example: Suppose there are two branches
`keep` `overwrite` that cannot be merged because of conflicts.
The changes in `overwrite` are not needed anymore,
and you just want to update it to `keep`.

```shell
git switch keep
git merge -s ours overwrite
git switch overwrite
git merge keep
```
