---
title: Network
ref: https://wiki.archlinux.org/index.php/NetworkManager
---

## Install

```shell
sudo pacman -S networkmanager
sudo systemctl enable NetworkManager.service
```

Use `nmtui` to manage your connections interactively on terminal.

## CLI

| Command | Description |
| --- | --- |
| `nmcli device wifi` | List nearby wifi networks. |
| `nmcli device wifi connect <SSID> password <pass>` | Connect to a wifi network. |
| `nmcli connection` | List already configured networks. |
| `nmcli connection up <SSID>` | Reconnect to a wifi network. |
| `nmcli connection down <SSID>` | Disconnect from a wifi network. |
| `nmcli connection delete <SSID>` | Delete configuration of wifi network. |
| `nmcli --show-secrets connection show <SSID>` | Check configuration of wifi network. |

## GUI

```shell
sudo pacman -S nm-connection-editor network-manager-applet
```
