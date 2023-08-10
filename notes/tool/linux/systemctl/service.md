---
title: Service
man: systemctl
---

## Usage

Root privileges are often needed when running `systemctl` commands.

```shell
systemctl OPTION ACTION my.service
```

| Option | Description |
| --- | --- |
| `--user` | Use the user service manager. |

| Action | Description |
| --- | --- |
| `start` | Start the service. |
| `stop` | Stop the service. |
| `restart` | Restart the service. |
| `enable` | Enable automatic service startup on boot. |
| `disable` | Disable automatic service startup on boot. |

## Creation

| Scope | Path |
| --- | --- |
| System | `/etc/systemd/system` |
| User | `~/.config/systemd/user` |

### System service

```ini
## someservice.service
[Unit]
Description=some service
Wants=network-online.target
After=network-online.target

[Service]
Type=oneshot
User=mateus
Environment=DISPLAY=:0
EnvironmentFile=/etc/someservice/someservice.conf
ExecStart=/path/to/script.py

[Install]
WantedBy=multi-user.target
```

### User service

```ini
## wallpaper.service
[Unit]
Description=set random wallpaper

[Service]
Type=oneshot
ExecStart=/home/mateus/.local/bin/wallpaper --random

[Install]
WantedBy=multi-user.target
```
