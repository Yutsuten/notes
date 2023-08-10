---
title: Samba
ref: https://wiki.archlinux.org/title/Samba
man: samba
arch: samba
---

## Configuration

Download the default configuration:

```shell
sudo curl -Lo "/etc/samba/smb.conf" "https://git.samba.org/samba.git/?p=samba.git;a=blob_plain;f=examples/smb.conf.default;hb=HEAD"
```

Edit `/etc/samba/smb.conf` and check if there are no errors using the command `testparm`.

```ini
## Sample /etc/samba/smb.conf
[global]
   workgroup = WORKGROUP
   server string = Samba Server
   server role = standalone server
   hosts allow = 192.168.0.
   log file = /var/log/samba/%m.log
   max log size = 50

[mateus]
   path = /home/mateus
   valid users = mateus
   read only = no
```

Start and enable `smb.service`, and add an password to your user:

```shell
sudo smbpasswd -a mateus
```

You must be able to login with this account.
