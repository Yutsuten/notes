---
title: Hardware
ref: https://github.com/systemd/systemd/issues/23322
---

## Add support for a new harware

Example of tablet `HUION Huion Tablet_H420X`.

Create `/lib/udev/hwdb.d/61-evdev-local.hwdb`:

```ini
evdev:input:b0003v256Cp0064*
 EVDEV_ABS_00=::200
 EVDEV_ABS_01=::200
```

Apply the change:

```shell
sudo systemd-hwdb update && sudo udevadm trigger /dev/input/event*
```

**Tip:** Way I used to find the device modalias:

```shell
find /sys -name modalias -print0 | xargs -0 cat | sort -u > ~/unplugged
find /sys -name modalias -print0 | xargs -0 cat | sort -u > ~/plugged
diff -u --color=always ~/unplugged ~/plugged
```
