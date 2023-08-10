---
title: Module
---

## Intel

### Prevent sleep when idle

Intel module may have a default of putting the audio device into sleep mode after a period of inactivity.
To disable this, create `/etc/modprobe.d/snd_hda_intel.conf` with:

```txt
options snd_hda_intel power_save=0 power_save_controller=N
```
