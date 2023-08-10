---
title: Virtual terminal
---

## Change virtual terminal colors

### Manual

Create a file `/etc/vtrgb` with the colors,
see more examples [here](https://github.com/coderonline/base16-vtrgb/tree/master/consolecolors).

Example bellow based on `base16-brogrammer.vga`.

```txt
56,248,45,236,42,78,16,214,78,222,29,243,16,83,15,255
60,17,197,186,132,90,129,219,82,53,211,189,129,80,125,255
74,24,94,15,210,183,94,229,102,46,97,9,214,185,219,255
```

Open a virtual terminal and run:

```shell
setvtrgb /etc/vtrgb
```

### Automatic on boot

Create an [initcpio hook](https://wiki.archlinux.org/title/Mkinitcpio#HOOKS) for this.

**Step 1:** Create `/etc/initcpio/install/setvtrgb`:

```shell
##!/bin/bash

build() {
  # configuration file is required or we will do nothing
  test -r /etc/vtrgb || return

  add_file `readlink -e /etc/vtrgb` /etc/vtrgb
  add_binary setvtrgb
  add_runscript
}


help() {
  cat <<HELPEOF
  This hook calls the setvtrgb program to apply the currently configured
  color scheme during the early boot process. It uses /etc/vtrgb as its
  configuration file.
HELPEOF
}
```

**Step 2:** Create `/etc/initcpio/hooks/setvtrgb`:

```shell
run_earlyhook() {
  setvtrgb /etc/vtrgb
  clear -x
}
```

**Step 3:** Add `setvtrgb` to `HOOKS` in `/etc/mkinitcpio.conf`:

```shell
HOOKS=(base udev setvtrgb autodetect modconf block filesystems keyboard resume fsck)
```

**Step 4:** Apply the changes:

```shell
sudo mkinitcpio -p linux
```
