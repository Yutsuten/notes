---
title: Info
---

## Hardware / system information

Some information are in files and can be seen using tools like `cat`.

| Information | File | Command |
| --- | --- | --- |
| OS | `/etc/os-release` | `hostnamectl` `uname -a` |
| Network | | `hostname -i` `ip -o address` `curl ifconfig.me` |
| CPU | `/proc/cpuinfo` | |

Get only the local IP address:

```shell
ip address | sed -nE 's# *inet (192[^/]+)/.*#\1#p'
```
