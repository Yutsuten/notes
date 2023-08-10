---
title: Environment
ref: https://wiki.archlinux.org/index.php/environment_variables
---

## System-wide

Variables that affects all users of the system,
set on `/etc/environment`.

## Session-wide

Variables that affects just a particular user,
set on `~/.pam_environment`.

Check the syntax [here](https://linux.die.net/man/5/pam_env.conf).

```txt
GTK_IM_MODULE DEFAULT=fcitx
QT_IM_MODULE  DEFAULT=fcitx
XMODIFIERS    DEFAULT=\@im=fcitx
```

## Resources file

For Xorg the file is `~/.xprofile`.

For bash the file is `~/.bash_profile`.

For zsh the file is `~/.zshenv` (environment variables),
or `~/.zprofile`.

## Shell

Initialization of interactive shells.

For bash the file is `~/.bashrc`.

For zsh the file is `~/.zshrc`.

```shell
export MY_ENV_VAR=true
export TZ="/usr/share/zoneinfo/Japan"
```
