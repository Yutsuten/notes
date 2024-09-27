---
title: Push
man: git-push
ref: https://git-scm.com/docs/git-push
---

## Usage

Update remote refs along with associated objects.

```shell
git push OPTIONS REPOSITORY REFSPEC
```

- `REPOSITORY` defaults to `origin`
- `REFSPEC` defaults to the current branch

| Option          | Description                                             |
| --------------- | ------------------------------------------------------- |
| `-d` `--delete` | All listed refs are deleted from the remote repository. |

## Examples

Push to branch `main`:

```shell
git push origin main
```

Delete branch in remote:

```shell
git push -d origin some-feature
```
