---
title: Iwd
ref: https://wiki.archlinux.org/index.php/Iwd
---

Internet Wireless Daemon.
Used to connect to a WIFI.

## Usage

Get an interactive prompt.

```shell
iwctl
```

You need the name of the wifi device, so first list it:

```txt
[iwd]# device list
```

Then scan and list networks:

```txt
[iwd]# station <device> scan
[iwd]# station <device> get-networks
```

Finally connect to the network:

```txt
[iwd]# station <device> connect <SSID>
```
