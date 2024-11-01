---
title: Sway
man: swaymsg
---

## Get tree

Gets a JSON-encoded layout tree of everything open.

If there is `"shell": "xwayland"`,
some app is running under Xwayland.

```shell
swaymsg -t get_tree | less
```

## Configuration

To add a hint `[XWayland]` to Xwayland window titles,
add the following to the configuration file:

```shell
for_window [shell="xwayland"] title_format "%title [XWayland]"
```
