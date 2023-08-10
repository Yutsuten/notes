---
title: Udev
ref: http://www.reactivated.net/writing_udev_rules.html
---

## Automount media device

Add the file `/etc/udev/rules.d/90-media-automount.rules` with the following content:

```ini
ACTION=="add", SUBSYSTEMS=="usb", SUBSYSTEM=="block", ENV{ID_FS_USAGE}=="filesystem", RUN{program}+="/usr/bin/systemd-mount --no-block --automount=yes --collect --owner=mateus $devnode"
ACTION=="add", SUBSYSTEMS=="usb", SUBSYSTEM=="block", ENV{ID_FS_USAGE}=="filesystem", RUN{program}+="/usr/bin/systemd-mount --no-block --automount=yes --collect $devnode"
```

To unmount the device, use:

```shell
sudo systemd-umount /run/media/system/<devname>
```

## Running commands

For example, for changing permissions of backlight files so you can change your brightness without sudo,
create `/etc/udev/rules.d/backlight.rules` with the following content:

```ini
ACTION=="add", SUBSYSTEM=="backlight", KERNEL=="intel_backlight", RUN+="/bin/chgrp video /sys/class/backlight/%k/brightness"
ACTION=="add", SUBSYSTEM=="backlight", KERNEL=="intel_backlight", RUN+="/bin/chmod g+w /sys/class/backlight/%k/brightness"
```
