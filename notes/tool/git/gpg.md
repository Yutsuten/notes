---
title: Gpg
---

```shell
## Register key to git
git config --global user.signingkey 3AA5C34371567BD2

## Add this to .bashrc
export GPG_TTY=$(tty)

## Sign commits by default
git config --global commit.gpgsign true
```
