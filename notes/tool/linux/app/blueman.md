---
title: Blueman
ref: https://wiki.archlinux.org/title/Blueman
---

## Requirements

On Arch Linux, `bluez`, `bluez-utils` and `pulseaudio-bluetooth` packages are needed.

Also enable `bluetooth.service`.

## Setup

Create the file `/etc/polkit-1/rules.d/51-blueman.rules` as root:

```txt
/* Allow users in wheel group to use blueman feature requiring root without authentication */
polkit.addRule(function(action, subject) {
    if ((action.id == "org.blueman.network.setup" ||
         action.id == "org.blueman.dhcp.client" ||
         action.id == "org.blueman.rfkill.setstate" ||
         action.id == "org.blueman.pppd.pppconnect") &&
        subject.isInGroup("wheel")) {

        return polkit.Result.YES;
    }
});
```

The user must belong to the `wheel` and `lp` group.

```shell
gpasswd -a ${USER} wheel
gpasswd -a ${USER} lp
```

To receive files remember to:

1. Right click on the Blueman tray icon
2. Local Services
3. Transfer
4. File Receiving (Object Push)
5. Tick the Accept files from trusted devices

Finally start `blueman` with the `blueman-applet` command.
