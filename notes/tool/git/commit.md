---
title: Commit
man: git-commit
---

## Usage

```shell
git commit OPTIONS
```

| Option           | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `--amend`        | Amend the last commit.                                       |
| `--no-edit`      | Use the selected commit message without launching an editor. |
| `-m` `--message` | Use the given MSG as the commit message.                     |

## Examples

```shell
git commit               # Open the editor to type the message
git commit -m 'Message'  # Create a message inline

## Update commit (not recommended if git push was done)
git commit --amend --no-edit     # Redo the last commit
git commit --amend -m 'Message'  # Redo the last commit and enter a new message
```
