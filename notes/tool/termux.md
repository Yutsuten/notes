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

```ssh-config
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
    # ForceCommand internal-sftp -d /storage/emulated/0/Share
```

The default mounted directory will be the termux home directory.
It is possible to change it,
but Android does not allow using the root directory of a storage.

If you plan to use `ssh-agent` or `sshd` it is recommended to run it as a service.
To install the `runit` [service manager](https://wiki.termux.com/wiki/Termux-services):

```shell
pkg install termux-services
```

Then:

- Enable and run `ssh-agent` service using `sv-enable ssh-agent`
- Enable and run `sshd` to autostart using `sv-enable sshd`

| Command      | Description                |
| ------------ | -------------------------- |
| `sv-enable`  | Enable and start a service |
| `sv-disable` | Disable a service          |
| `sv up`      | Start a service            |
| `sv down`    | Stop a service             |

From another machine, configure the connection to termux (adjust values as needed):

```ssh-config
Host android
    HostName 192.168.0.100
    User u0_a482
    Port 8022
```
