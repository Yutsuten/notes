---
title: Module
ref: https://wiki.archlinux.org/index.php/Kernel_module
---

| Command | Description |
| --- | --- |
| `lsmod` | List loaded Kernel modules. |
| `modinfo MOD_NAME` | Get information of a Kernel module. |

Options can be passed to Kernel modules by creating files inside `/etc/modprobe.d/`.

For example, `/etc/modprobe.d/snd_hda_intel.conf`:

```ini
options snd_hda_intel power_save=0 power_save_controller=N
```
