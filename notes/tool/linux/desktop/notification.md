---
title: Notification
ref: https://wiki.archlinux.org/index.php/Desktop_notifications
---

## Usage

Install `libnotify` and a notification server, like `notification-daemon`.

To start the daemon automatically, add to `/usr/share/dbus-1/services/org.freedesktop.Notifications.service`:

```ini
[D-BUS Service]
Name=org.freedesktop.Notifications
Exec=/usr/lib/notification-daemon-1.0/notification-daemon
```

The executable path may be different depending on your distro.

Test if its working correctly with:

```shell
notify-send 'Title' 'I am a notification!'
```
