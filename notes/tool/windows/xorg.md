---
title: Xorg
---

## X server

Choose one of the bellow.

- VcXsrv (recommended)
- Xming

### Setup

If only a program is going to be launched (no window manager),
choose *Multiple windows*.
If a Linux window manager is going to be used,
choose *Fullscreen*, *One large window* or *One window without titlebar*.

Here are some parameters that may be interesting to use:

| Parameter       | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `-xkblayout jp` | Set japanese keyboard layout.                              |
| `-keyhook`      | Grab special keypresses like Alt-Tab or the Menu key.      |
| `-ac`           | Disable access control restrictions. A must have for WSL2. |

## Display

Open Windows Powershell and add the `DISPLAY` variable:

```powershell
[System.Environment]::SetEnvironmentVariable("DISPLAY", "localhost:0", "User")
```

## SSH

To be able to forward X11,
install the following in the remote server:

- Debian-based distribution: `dbus-x11`
- Arch-based distribution: `xorg-xauth`

Make sure to have `X11Forwarding yes` in `/etc/ssh/sshd_config`.
If making any changes, restart `sshd` service and re-login.

Use `ssh -Y` to login the server.
