---
title: Termux
ref: https://termux.dev/en/
---

## Install

From `F-Droid`, install:

- Termux
- [Termux:API](https://wiki.termux.com/wiki/Termux:API)

## Configuration

Allow access to external storage:

```shell
termux-setup-storage
```

Enable APIs:

```shell
pkg install termux-api
```

Update/clear the greet message in `$PREFIX/etc/motd`.

Configure GnuPG:

```shell
update-alternatives --install $PREFIX/bin/pinentry pinentry $PREFIX/bin/pinentry-tty 20
update-alternatives --install $PREFIX/bin/pinentry pinentry $PREFIX/bin/pinentry-curses 10
```

```ini
# ~/.gnupg/gpg-agent.conf
default-cache-ttl 1800
```

## Usage

Play audio:

```shell
termux-media-player play FILE
termux-media-player pause
termux-media-player stop
```

## SFTP

Sample configuration to enable sftp.

Edit `$PREFIX/etc/ssh/sshd_config`:

```ini
PrintMotd yes

# Security
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication no
AllowTcpForwarding no

## SFTP only
Subsystem sftp /data/data/com.termux/files/usr/libexec/sftp-server

Match LocalAddress 192.168.0.*
    PubkeyAuthentication yes
    AuthenticationMethods publickey
    ForceCommand internal-sftp
```

Run `sshd` to start the daemon.
