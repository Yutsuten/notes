---
title: Xev
---

## Usage

Program to print contents of X events, like keypresses.

By default a new window is opened and monitored,
but a different window can be set.

```shell
xev OPTIONS
```

| Option | Description |
| --- | --- |
| `-root` | Monitore the root window instead. |
| `-id` | Monitore the window with the given id instead. |

## Examples

Monitore the current window:

```shell
xev -id $(xprop -root _NET_ACTIVE_WINDOW | cut -d ' ' -f 5)
```
