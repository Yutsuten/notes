---
title: Clean
ref: https://git-scm.com/docs/git-clean
---

## Usage

Remove untracked files from the working tree.

```shell
git clean OPTIONS TARGET
```

| Option | Description |
| --- | --- |
| `-d` | Recurse into untracked directories. Not needed when TARGET is a directory. |
| `-f` `--force` | Delete files without asking. |
| `-i` `--interactive` | Ask before deleting files. |
| `-n` `--dry-run` | Don't do anything, just show what would be done. |
| `-q` `--quiet` | Only report errors. |
| `-e` `--exclude` | Use the given exclude pattern in addition to the standard ignore rules (`.gitignore`). |
| `-x` | Don’t use the standard ignore rules (`.gitignore`). |
| `-X` | Remove only files ignored by Git. |
