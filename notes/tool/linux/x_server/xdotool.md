---
title: Xdotool
---

## Usage

```shell
xdotool CMD OPTIONS
```

| Command | Options | Description |
| --- | --- | --- |
| `click` | `--repeat TIMES` `--delay MS` | Send a click. Left mouse is 1, middle is 2, right is 3, wheel up is 4, wheel down is 5. |

## Example

```shell
xdotool click --repeat 360 --delay 1000 1
```
