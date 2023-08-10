---
title: Waypipe
ref: https://gitlab.freedesktop.org/mstoeckl/waypipe/
---

## Homebrew

Install the requirements:

```shell
brew install meson lz4 wayland wayland-protocols
```

Set the `LD_LIBRARY_PATH` environment variable so `waypipe` works:

```shell
set -xg LD_LIBRARY_PATH /home/linuxbrew/.linuxbrew/Cellar/wayland/1.20.0/lib
```

_Note: To use vim's clipboard in the remote machine install
[wl-clipboard](https://github.com/bugaevc/wl-clipboard) too._
