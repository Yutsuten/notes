---
title: Server
ref: https://wiki.archlinux.org/title/OpenSSH
man: ssh_config
---

## Disable password

Edit `/etc/ssh/sshd_confg`:

```ssh-config
PasswordAuthentication no
```

## Local network only SFTP

For better security:

- Disable any kind of authentication by default
- Enable `PubkeyAuthentication` for local connections only
- Disable shell by:
  - Enabling sftp-only access with `Subsystem` `ForceCommand`
  - Changing `ChrootDirectory`

Create a file `/etc/ssh/sshd_config.d/10-local-sftp.conf` with:

```ssh-config
# Security
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication no
AllowTcpForwarding no

## SFTP only
Subsystem sftp internal-sftp

Match LocalAddress 192.168.0.*
    AllowUsers mateus
    PubkeyAuthentication yes
    AuthenticationMethods publickey
    ForceCommand internal-sftp
    ChrootDirectory /home
```

:::info
Directory set in `ChrootDirectory` must be owned by `root`.
For more info see [SFTP chroot](https://wiki.archlinux.org/title/SFTP_chroot).
:::
