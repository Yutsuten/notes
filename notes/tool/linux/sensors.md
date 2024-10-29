---
title: Sensors
ref: https://github.com/Alexays/Waybar/wiki/Module:-Temperature
---

## hwmon

Get a list of sensors (fish):

```fish
paste (ls -1 /sys/class/hwmon/hwmon*/temp*_input | psub) (cat /sys/class/hwmon/hwmon*/temp*_label | psub) (cat /sys/class/hwmon/hwmon*/temp*_input | psub) \
  | column -ts \t
```

For CPU temperature, usually the `Tctl` sensor is used.
Get the `realpath` of it and use on `waybar`, for example.

```shell
realpath /sys/class/hwmon/hwmon2/temp1_input
```

Waybar's `config.json`:

```json
{
    "temperature": {
        "hwmon-path-abs": "/sys/devices/pci0000:00/0000:00:18.3/hwmon",
        "input-filename": "temp1_input"
    }
}
```
