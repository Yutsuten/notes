---
title: Pass
---

## Setup

You must have a GPG key.
Run the following command to get the key ID:

```shell
gpg -K --keyid-format long
```

Then initialize your key store.

```shell
pass init KEYID
```

### Synchronize with remote

Initialize and add a remote:

```shell
pass git init
pass git remote add origin REMOTE_URL
```

Then you can reset (for restoring) or push (for backing up) as needed.

```shell
pass git fetch --set-upstream origin master
pass git reset --hard origin/master
```

## Push changes to remote

```shell
pass git push
```
