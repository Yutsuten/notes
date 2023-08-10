---
title: Display
ref: https://wiki.archlinux.org/index.php/Display_Power_Management_Signaling
---

## Screensaver setting

Edit `/etc/X11/xorg.conf.d/10-monitor.conf` with the desired settings.
Values are in minutes. Use `"0"` to disable the feature.

```ini
Section "Monitor"
    Identifier "Screensaver"
    Option "DPMS" "false"
EndSection

Section "ServerFlags"
    Option "StandbyTime" "0"
    Option "SuspendTime" "0"
    Option "OffTime" "0"
    Option "BlankTime" "0"
EndSection
```

## Commands

### Query current settings

```shell
xset q
```

For example, to get screen state (On/Off):

```shell
xset q | sed -nE 's/^\s+Monitor is (\w+)$/\1/p'
```

### Screensaver

*NOTE: Command applies to current session and won't survive a reboot.*

Change the screensaver options using `xset s`.

Up to 2 parameters (timeout and cycle) can be set.
Values are in seconds.

```shell
xset s 0 0
xset s off
```

Change the DPMS options using `xset dpms`.

Up to 3 parameters (standby, suspend and off) can be set.
Values are in seconds.

```shell
xset dpms 0 0 0
```

### Screen off

```shell
xset dpms force off
```
