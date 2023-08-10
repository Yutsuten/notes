---
title: Ubuntu
ref: https://github.com/microsoft/WSL/issues/6942
---

## Upgrade

Using `do-release-upgrade` seems to not be a good idea,
so run something like this:

```shell
sudo sed -i 's/bionic/hirsute/g' /etc/apt/sources.list
sudo sed -i 's/bionic/hirsute/g' /etc/apt/sources.list.d/*.list
sudo apt update
sudo apt upgrade
sudo apt full-upgrade
sudo apt autoremove
```

Or, to use `do-release-upgrade`,
do this:

```shell
sudo apt purge snapd
sudo do-release-upgrade
```

## Locale

```shell
sudo update-locale LANG=ja_JP.UTF-8
```

## Utilities

```shell
sudo apt install make git xfce4-terminal fonts-emojione fonts-noto neovim unzip
```
