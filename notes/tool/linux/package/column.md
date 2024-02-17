---
title: Column
man: column
---

## Usage

Columnate lists.

```shell
column OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-t` | Determine the number of columns the input contains and create a table. |
| `-s` | Specify the possible input item delimiters (default is whitespace). |

Nice for getting the output of [paste](/tool/linux/package/paste)
and pretty-print it.

## Example

Get a list of sensors (filename, label and value):

```fish
paste (ls -1 /sys/class/hwmon/hwmon*/*_input | psub) (cat /sys/class/hwmon/hwmon*/*_label | psub) (cat /sys/class/hwmon/hwmon*/*_input | psub) \
  | column -ts \t
```
