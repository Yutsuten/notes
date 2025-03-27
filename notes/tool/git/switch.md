---
title: Switch
man: git-switch
ref: https://git-scm.com/docs/git-switch
---

## Usage

Switch to a specified branch.

```shell
git switch OPTIONS BRANCH START_POINT
```

| Option | Description |
| --- | --- |
| `-c` `--create` | Create a new branch. |
| `-C` `--force-create` | Create a new branch ovewriting if it already exists. |
| `-d` `--detach` | Switch to a commit or tag for inspection and discardable experiments. |
| `-f` `--force` `--discard-changes` | Proceed while discarding uncommited changes. |
| `-m` `--merge` | Proceed while merging uncommited changes. |
| `-t` `--track` | When creating a new branch, set up "upstream" configuration. |

## Example

Switch to an existing branch:

```shell
git switch feature-branch
```

Create a new branch from a forked repository,
and start tracking changes on it (`git remote add` before doing so):

```shell
git switch -c feature-branch some-remote/feature-branch
```
