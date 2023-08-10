---
title: Ssh copy id
name: ssh-copy-id
---

## Goal

Login to a remote server using a SSH key.

## Usage

The requirement is that you already generated `~/.ssh/id_rsa` key.

Run this from your *local machine*:

```shell
ssh-copy-id user@servername
```

## Manual installation

Copy the contents of `~/.ssh/id_rsa.pub` from your *local machine*,
and append to the last line of the `~/.ssh/authorized_keys` of the remote server.

For windows machines, the SSH folder is in `%USERPROFILE%\.ssh`.
