---
title: Timedatectl
man: timedatectl
---

## Usage

Control the system time and date.

```shell
timedatectl OPTIONS COMMAND
```

| Command | Description |
| --- | --- |
| `set-ntp` | Controls whether network time synchronization is active and enabled (if available). |

## Example

Synchronize time and date with ntp server:

```shell
timedatectl set-ntp yes
```
