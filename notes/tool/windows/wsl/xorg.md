---
title: Xorg
---

## Display

For WSL1:

```shell
export DISPLAY=127.0.0.1:0
```

For WSL2:

```shell
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0
```

If required by your setup, also `export LIBGL_ALWAYS_INDIRECT=1`.

## Package

Install dbus, terminal and some other basic tools:

```shell
sudo apt install dbus-x11
```
