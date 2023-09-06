---
title: Gpg
---

## Configure signing key

Get the sign key ID (short is ok):

```shell
gpg -K --keyid-format short
```

Then configure git to use it:

```shell
git config --global user.signingkey '09DCF863'
git config --global commit.gpgsign true
```
