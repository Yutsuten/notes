---
title: Xprop
---

## Usage

Get information about a X window.

Without any options, you have to select the target window with the mouse.

```shell
xprop OPTIONS
```

| Option | Description |
| --- | --- |
| `-root` | Make root the target window. |

## Examples

Get ID of current window:

```shell
xprop -root _NET_ACTIVE_WINDOW | cut -d ' ' -f 5
```
