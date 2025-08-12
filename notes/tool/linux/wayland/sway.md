---
title: Sway
man: swaymsg
---

## Modifier key

Available options as modifier keys:

| Key       | Description |
| --------- | ----------- |
| `Mod1`    | Alt         |
| `Mod4`    | Super Key   |
| `Control` | Ctrl        |

```shell
set $mod Mod4
```

## Configuration

To add a hint `[XWayland]` to Xwayland window titles,
add the following to the configuration file:

```shell
for_window [shell="xwayland"] title_format "%title [XWayland]"
```

## Swaymsg

List outputs:

```shell
swaymsg -t get_outputs
```

Get a JSON-encoded layout tree of everything open.
If there is `"shell": "xwayland"`,
some app is running under Xwayland.

```shell
swaymsg -t get_tree
```
