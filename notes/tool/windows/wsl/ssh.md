---
title: Ssh
ref: https://www.hanselman.com/blog/the-easy-way-how-to-ssh-into-bash-and-wsl2-on-windows-10-from-an-external-machine
---

## Linux openssh

The steps here are incomplete.

Install `openssh-server` and start the server.

```shell
sudo apt install openssh-server
sudo service ssh start
```

Seems that it defaults to using a key file.
Change this in `/etc/ssh/sshd_config`:

```ssh-config
PasswordAuthentication yes
```

Then restart the ssh service.

```shell
sudo service ssh restart
```
