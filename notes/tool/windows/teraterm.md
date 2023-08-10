---
title: Teraterm
---

## Solarized

Add the following to `TERATERM.INI`:

```ini
ANSIColor=0,0,43,54, 1,203,75,22, 2,88,110,117, 3,101,123,131, 4,131,148,150, 5,108,113,196, 6,147,161,161, 7,253,246,227, 8,7,54,66, 9,220,50,47, 10,133,153,0, 11,181,137,0, 12,38,139,210, 13,211,54,130, 14,42,161,152, 15,238,232,213

; Solarized Light
VTColor=101,123,131,253,246,227
VTReverseColor=253,246,227,101,123,131

; Solarized Dark
VTColor=131,148,150,0,43,54
VTReverseColor=0,43,54,131,148,150
```

## X11 forwarding with teraterm

### Set teraterm to forward X11 display

- Go to Settings -> SSH Forwarding
- Check 'Display remote X applications on local X server'

### On guest (machine you connected)

- Install: `xorg-x11-xauth xorg-x11-fonts-* xorg-x11-utils dbus-x11`
- Maybe needed: Execute 'xhost +' to allow remote X clients to connect

### On the guest, do not set the DISPLAY environment variable

- Variable will be set by teraterm
- Default `DISPLAY` set by teraterm is `localhost:10.0`
