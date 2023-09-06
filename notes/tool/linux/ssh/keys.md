---
title: Keys
ref: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
---

## Generate keys

The public key will be generated at `~/.ssh/id_ed25519.pub`.

```shell
ssh-keygen -t ed25519 -a 100 -C 'your_email@example.com'
```

Private key's file must have permission of `400` or it will not work.

```shell
chmod 400 ~/.ssh/id_ed25519
```
