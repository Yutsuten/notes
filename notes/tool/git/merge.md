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

### Manual conflict resolution

Check if all conflicts were resolved by running:

```shell
git grep -HE '<{7} HEAD'
```

To commit with the default merge message:

```shell
git commit --no-edit
```

### Automatic conflict resolution

Merge is actually done and files content change,
but contents of `ours` or `theirs` is automatically chosen in case of conflict.

Example of merging `master` into a dev branch.

```shell
git merge -Xours master    # In case of conflict: Keep ours, drop master
git merge -Xtheirs master  # In case of conflict: Drop ours, keep master
```

### Overwrite branch

Using `-s ours` discards everything the other tree did,
declaring our history contains all that happened in it.

In summary, no changes are done in the files.
Only git changes.

Example: Suppose there are two branches `keep` and `override`.
You want `keep` as is,
and drop everything in `override`.

```shell
git switch keep
git merge -s ours override
git switch override
git merge keep
```
