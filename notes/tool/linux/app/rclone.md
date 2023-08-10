---
title: Rclone
ref: https://rclone.org/
---

## Install rclone

Access [this link](https://rclone.org/downloads/) or run:

```shell
curl https://rclone.org/install.sh | sudo bash
```

## Configure dropbox

```shell
## https://rclone.org/dropbox/
rclone config
n) New remote
d) Delete remote
q) Quit config
e/n/d/q> n
name> dropbox
## ...
Storage> 8  # Dropbox
Dropbox App Key - leave blank normally.
app_key>
Dropbox App Secret - leave blank normally.
app_secret>
Remote config
## Skip advanced configuration and let it configure oauth
```

## Sync

```shell
rclone sync -v dropbox:/ ~/Dropbox/  # From dropbox to local
rclone sync -v ~/Dropbox/ dropbox:/  # From local to dropbox

--dry-run  # For checking what changes would be made
```
