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

Read more [here](https://lwn.net/Articles/83588/).

`swap_tendency` behaves diferently when bellow or above 100.

```c
swap_tendency = mapped_ratio/2 + distress + vm_swappiness;
```

- Lower than 50: Memory is already full and having distress (trouble to free memory).
- 50 means: Wait until we run out of memory until swapping.
- 55 means: When memory usage is 90%, start using swap.
- 60 means: When memory usage is 80%, start using swap.

Check the current swappiness with:

```shell
sysctl vm.swappiness
```

Temporarily set the swappiness:

```shell
sysctl -w vm.swappiness=55
```

To set it permanently, add to `/etc/sysctl.d/99-swappiness.conf`:

```txt
vm.swappiness=55
```
