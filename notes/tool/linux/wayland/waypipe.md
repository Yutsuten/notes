---
title: Waypipe
ref: https://gitlab.freedesktop.org/mstoeckl/waypipe/
---

## Usage

```shell
waypipe OPTIONS MODE
```

| Option      | Description                                        |
| ----------- | -------------------------------------------------- |
| `--display` | Set the `WAYLAND_DISPLAY` name. Random if not set. |

Usually used with `ssh`.

When keeping a running session (zellij) and reconnecting to it,
using the same `WAYLAND_DISPLAY` is necessary to keep clipboard working.

```shell
waypipe --display wayland-ssh ssh user@host
```

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
