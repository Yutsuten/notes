---
title: Service
ref: https://linuxhandbook.com/create-systemd-services/
man: systemctl
---

## Usage

Root privileges are often needed when running `systemctl` commands.

```shell
systemctl OPTION ACTION my.service
```

| Option   | Description                   |
| -------- | ----------------------------- |
| `--user` | Use the user service manager. |

| Action    | Description                                |
| --------- | ------------------------------------------ |
| `start`   | Start the service.                         |
| `stop`    | Stop the service.                          |
| `restart` | Restart the service.                       |
| `enable`  | Enable automatic service startup on boot.  |
| `disable` | Disable automatic service startup on boot. |

## Creation

| Scope  | Path                     |
| ------ | ------------------------ |
| System | `/etc/systemd/system`    |
| User   | `~/.config/systemd/user` |

### System service

```ini
# something.service
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

Replace `{HOME}` with your home directory.

```ini
# caddy.service
[Unit]
Description=Caddy web server
Documentation=https://caddyserver.com/docs/
After=network.target

[Service]
Type=notify
ExecStartPre=/usr/bin/caddy validate --config {HOME}/.local/server/Caddyfile
ExecStart=/usr/bin/caddy run --config {HOME}/.local/server/Caddyfile
ExecReload=/usr/bin/caddy reload --config {HOME}/.local/server/Caddyfile --force
Restart=on-abnormal
TimeoutStopSec=5s

[Install]
WantedBy=default.target
```
