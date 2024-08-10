---
title: Waybar
ref: https://github.com/Alexays/Waybar
---

## Custom module

To create a toggle that updates on signal,
add a setting in `config.jsonc` like this:

```json
{
    "custom/record": {
        "signal": 1,
        "exec": "sh -c '[ -f /tmp/waybar_record ] && echo 🔴 Recording'",
        "hide-empty-text": true,
        "escape": true
    },
}
```

Here depending if the file `/tmp/waybar_record` exists,
we change the text shown on waybar.

Bellow an example of `fish` script that toggles the text of our module.
As our signal is configured as `1`, we use `RT1`.

```fish
#!/usr/bin/fish
touch /tmp/waybar_record
kill --signal RT1 waybar

sleep 10s

rm --force /tmp/waybar_record
kill --signal RT1 waybar
```
