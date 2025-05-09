---
title: Timer
ref: https://wiki.archlinux.org/index.php/Systemd/Timers
---

## Usage

There are user and system timers.
If dealing with system timers, root privileges are needed.

```shell
systemctl OPTION ACTION mytimer.timer
```

Check the timers status with:

```shell
systemctl --user list-timers --all
```

| Option   | Description                   |
| -------- | ----------------------------- |
| `--user` | Use the user service manager. |

| Action        | Description                                |
| ---------     | ------------------------------------------ |
| `start`       | Start the service.                         |
| `stop`        | Stop the service.                          |
| `restart`     | Restart the service.                       |
| `enable`      | Enable automatic service startup on boot.  |
| `disable`     | Disable automatic service startup on boot. |
| `list-timers` | List available timers and its status.      |

## Creation

After any changes to a timer, run:

```shell
systemctl --user daemon-reload
```

| Scope  | Path                     |
| ------ | ------------------------ |
| System | `/etc/systemd/system`    |
| User   | `~/.config/systemd/user` |

Example of `mytimer.timer`:

```ini
[Unit]
Description=mytimer

[Timer]
OnCalendar=Sat *-*-* 18:00:00
Persistent=true

[Install]
WantedBy=timers.target
```

| Setting           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `OnStartupSec`    | Activate the timer relative to boot time.            |
| `OnUnitActiveSec` | Activate the timer relative to last activation time. |
| `OnCalendar`      | Defines realtime (cron-like) timers.                 |
