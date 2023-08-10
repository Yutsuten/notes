---
title: Basic
---

## Usage

```shell
systemctl COMMAND
```

| Command | Description |
| --- | --- |
| `halt` | Terminates all services and processes, but does not power-off the system. |
| `poweroff` | Terminates all services and processes, then power-off the system. |
| `reboot` | Same as `poweroff`, but start the system again. |

### Restarting X

```shell
sudo systemctl restart display-manager
```
