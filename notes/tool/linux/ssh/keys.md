---
title: Keys
ref: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
---

### Manage SSH keys

```shell
## Add key
ssh-keygen -t rsa -b 4096 -C "email@example.com"

## Public key
cat ~/.ssh/id_rsa.pub | xclip -sel clip
```

The key must have `400` permissions or it will not work.

```shell
chmod 400 ~/.ssh/id_rsa
```
