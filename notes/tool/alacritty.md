---
title: Alacritty
ref: https://github.com/alacritty/alacritty
---

## Key bindings

Get the name of the keys for the key binding with:

```shell
alacritty --print-events | grep "WindowEvent.*KeyboardInput"
```

## Terminfo install

[GitHub Issue](https://github.com/alacritty/alacritty/issues/2838)

When SSHing into another server,
alacritty's terminfo must be installed there.

```shell
curl -Lo /tmp/alacritty.info "https://raw.githubusercontent.com/alacritty/alacritty/master/extra/alacritty.info"
sudo tic -xe alacritty,alacritty-direct /tmp/alacritty.info
```

Or else change `TERM` to something like `xterm-256color`.

```shell
TERM=xterm-256color ssh
```
