---
title: Xrandr
man: xrandr
---

## Usage

Run the program without options to see the list of available outputs.

```shell
xrandr OPTIONS
```

| Option | Description |
| --- | --- |
| `--output` | Selects an output to reconfigure. |
| `--auto` | Enable output using their first preferred mode. |
| `--left-of` | Position the output to the left of another output. |
| `--right-of` | Position the output to the right of another output. |
| `--above` | Position the output above of another output. |
| `--below` | Position the output bellow of another output. |
| `--same-as` | Set both outputs to show the same content. |
| `--brightness` | Multiply the gamma values to specified floating value. |
| `--off` | Disables the output. |
| `--primary` | Set the output as primary. |

## Examples

Extend screens:

```shell
xrandr --output HDMI-1 --auto --right-of eDP-1
```

Only one monitor:

```shell
xrandr --output eDP-1 --off --output HDMI-1 --auto --primary
xrandr --output eDP-1 --auto --primary --output HDMI-1 --off
```

Disable HDMI:

```shell
xrandr --output HDMI-1 --off
```
