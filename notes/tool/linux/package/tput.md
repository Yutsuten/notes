---
title: Tput
ref: https://linuxcommand.org/lc3_adv_tput.php
---

## Usage

Make terminal-dependent capabilities and information available to the shell.

```shell
tput CAPNAME
```

| Capability name | Description |
| --- | --- |
| `bold` | Output bold text. |
| `sgr0` | Output normal text. |
| `setaf [0-9]` | Set foreground color. |
| `setab [0-9]` | Set background color. |
| `lines` | Number of lines in the terminal. |
| `cols` | Number of columns in the terminal. |

### Color table

| Value | Color |
| --- | --- |
| `0` | Black |
| `1` | Red |
| `2` | Green |
| `3` | Yellow |
| `4` | Blue |
| `5` | Magenta |
| `6` | Cyan |
| `7` | White |
| `8` | Not used |
| `9` | Reset to default color |

## Example

```shell
echo "This text is $(tput bold)bold$(tput sgr0). This text is normal."
```
