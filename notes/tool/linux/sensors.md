---
title: Sensors
ref: https://github.com/Alexays/Waybar/wiki/Module:-Temperature
---

## hwmon

Get a list of sensors:

```shell
cat /sys/class/hwmon/hwmon*/*_label
```

To get the value (temperature), replace `label` with `input`.
Example of `Tctl` sensor (on my PC):

```shell
/sys/class/hwmon/hwmon1/temp1_input
```
