---
title: Psub
ref: https://fishshell.com/docs/current/cmds/psub.html
---

## Usage

Perform process substitution.

It means that the output of the command will be used as input file.
It is not `stdin`, it works like a real file.

```fish
some_command | psub
```

Equivalent to `<(some_command)` in bash.

## Example

Get a list of sensors (filename, label and value):

```fish
paste (ls -1 /sys/class/hwmon/hwmon*/*_input | psub) (cat /sys/class/hwmon/hwmon*/*_label | psub) (cat /sys/class/hwmon/hwmon*/*_input | psub) \
  | column -ts \t
```
