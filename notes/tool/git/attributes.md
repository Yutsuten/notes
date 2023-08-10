---
title: Attributes
ref: https://docs.github.com/ja/get-started/getting-started-with-git/configuring-git-to-handle-line-endings
man: gitattributes
---

## Usage

Configure line endings per-repository with `.gitattributes`:

```ini
## Set the default behaviour, in case people don't have core.autocrlf set.
* text=auto

## Exclude binary files from the conversion
*.png binary
*.jpg binary
```

Apply the changes with:

```shell
git add --renormalize .
git commit -m 'Renormalize all the line endings'
```
