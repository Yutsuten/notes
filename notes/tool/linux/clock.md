---
title: Clock
---

## Check

Check the current timedate configuration with:

```shell
timedatectl
```

## Adjust

Automatically synchronize the clock using NTP.

```shell
sudo timedatectl set-ntp yes
```

Or set it manually using the command bellow
(you may give only the date or the time).

```shell
sudo date -s 'YYYY-MM-DD HH:MM:SS'
```
