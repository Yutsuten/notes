---
title: Swap
ref: https://wiki.archlinux.org/index.php/swap
---

## Checking swap status

```shell
swapon --show
free -h
```

## Swap file

The following commands creates and activates a swap file of 8000 MiB.

```shell
dd if=/dev/zero of=/swapfile bs=1M count=8000 status=progress
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```

Also add an entry to the swap file on `/etc/fstab`:

```txt
/swapfile none swap defaults 0 0
```

## Swappiness

The default swappiness is too high,
reducing it improves performance.

Check the current swappiness with:

```shell
sysctl vm.swappiness
```

Temporarily set the swappiness:

```shell
sysctl -w vm.swappiness=10
```

To set it permanently, add to `/etc/sysctl.d/99-swappiness.conf`:

```txt
vm.swappiness=10
```
