---
title: Paste
man: paste
---

## Usage

Merge lines of files.

```shell
paste OPTIONS FILES
```

| Option | Description |
| --- | --- |
| `-d` | Use the specified character instead of TABs. |

To make the output easier to read,
you may want to pipe its output to [column](/tool/linux/package/column)

## Example

Merge lines of `variables.txt` with `values.txt`:

```shell
paste -d ' ' variables.txt values.txt > assignment.txt
```

Get a list of sensors (filename, label and value):

```fish
paste (ls -1 /sys/class/hwmon/hwmon*/*_input | psub) (cat /sys/class/hwmon/hwmon*/*_label | psub) (cat /sys/class/hwmon/hwmon*/*_input | psub) \
  | column -ts \t
```
