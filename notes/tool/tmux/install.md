---
title: Install
ubuntu: tmux
---

## Compile from source

### Ubuntu

Build dependencies: `wget tar libevent-dev libncurses-dev`

```shell
VERSION=2.7
wget https://github.com/tmux/tmux/releases/download/${VERSION}/tmux-${VERSION}.tar.gz
tar xf tmux-${VERSION}.tar.gz
rm -f tmux-${VERSION}.tar.gz
cd tmux-${VERSION}
./configure
make
sudo make install
cd -
sudo rm -rf /usr/local/src/tmux-*
sudo mv tmux-${VERSION} /usr/local/src
```
