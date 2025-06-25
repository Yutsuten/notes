---
title: Tput
ref: https://linuxcommand.org/lc3_adv_tput.php
---

## Usage

Make terminal-dependent capabilities and information available to the shell.

```shell
tput CAPNAME
```

| Capability name | Description                        |
| --------------- | ---------------------------------- |
| `bold`          | Output bold text.                  |
| `sgr0`          | Output normal text.                |
| `setaf [0-9]+`  | Set foreground color.              |
| `setab [0-9]+`  | Set background color.              |
| `lines`         | Number of lines in the terminal.   |
| `cols`          | Number of columns in the terminal. |

### Color table

| Color   | Normal | Bright |
| ------- | ------ | ------ |
| Black   | `0`    | `8`    |
| Red     | `1`    | `9`    |
| Green   | `2`    | `10`   |
| Yellow  | `3`    | `11`   |
| Blue    | `4`    | `12`   |
| Magenta | `5`    | `13`   |
| Cyan    | `6`    | `14`   |
| White   | `7`    | `15`   |

## Example

Bold & normal:

```shell
echo "$(tput bold)This text is bold$(tput sgr0). This text is normal."
```

Colored:

```shell
echo "$(tput setaf 1)red text$(tput sgr0) $(tput setaf 2)green text$(tput sgr0)"
```
