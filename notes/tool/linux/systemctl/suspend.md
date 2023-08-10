---
title: Suspend
ref: https://bbs.archlinux.org/viewtopic.php?id=234725
man: systemd-suspend.service
---

## Usage

```shell
systemctl COMMAND
```

| Command | Description |
| --- | --- |
| `suspend` | Also known as sleep, saves the current state to RAM and suspends the system. |
| `hibernate` | Saves the current state to disk and shuts down the system. |
| `hybrid-sleep` | Saves the current state to both RAM and disk, then suspends the system. |

### Hibernate issues

In some machines ethernet may become unusable after hibernation.
Restarting the ethernet module seems to fix it.

Find the name of the module:

```shell
lspci -knn
```

Create the file `/usr/lib/systemd/system-sleep/fix_ethernet.sh`:

```shell
##!/bin/sh
case $1/$2 in
  pre/*)
    ;;
  post/*)
    modprobe -r alx
    modprobe alx
    ;;
esac
```
