---
title: Network
---

## NetworkManager

[NetworkManager](https://wiki.archlinux.org/index.php/NetworkManager) requires installation.

- For wired connection, just starting/enabling the service is enough.
- For wireless connection, further configuration is needed.

```shell
sudo pacman -S networkmanager
sudo systemctl enable NetworkManager
```

### Terminal

| Tool    | Description |
| ------- | ----------- |
| `nmcli` | Manual      |
| `nmtui` | Interactive |

Common usage of `nmcli`:

| Command                                     | Description                       |
| ------------------------------------------- | --------------------------------- |
| `nmcli dev wifi`                            | List nearby wifi networks.        |
| `nmcli dev wifi connect NAME password PASS` | Connect to a wifi network.        |
| `nmcli con [show]`                          | List known networks.              |
| `nmcli con up NAME`                         | Reconnect to a network.           |
| `nmcli con down NAME`                       | Disconnect from a network.        |
| `nmcli con delete NAME`                     | Delete network configuration.     |
| `nmcli con mod NAME ipv4.dns DNS`           | Update DNS servers configuration. |
| `nmcli -s con show NAME`                    | Check network configuration.      |
| `nmcli -f ipv4.dns con show NAME`           | List configured DNS servers.      |

To check the currently applied DNS servers (or to change temporarily),
see/edit the contents of `/etc/resolv.conf`.

To permanently update DNS servers configuration:

```shell
nmcli con show # Get the connection name
nmcli -f ipv4.dns con show NAME # Get connection's DNS configuration
sudo nmcli con mod NAME ipv4.dns 'new_ipv4,old_ipv4' # Update
sudo nmcli con up NAME # Apply changes
cat /etc/resolv.conf # Check if it is applied
```

### GUI

```shell
sudo pacman -S nm-connection-editor network-manager-applet
```

## systemd-networkd

`systemd` is usually installed by default,
and it includes [systemd-networkd](https://wiki.archlinux.org/title/Systemd-networkd).

It works by adding configuration files into the `/etc/systemd/network/` folder.
Samples can be found at `/usr/lib/systemd/network/`.

### Wired configuration

Copy or create a symbolic link of `89-ethernet.network.example`.

```shell
ln -s /usr/lib/systemd/network/89-ethernet.network.example /etc/systemd/network/89-ethernet.network
```

Start/enable `systemd-networkd` service.

```shell
sudo systemctl enable systemd-networkd
```
