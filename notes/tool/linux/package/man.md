---
title: Man
man: man
---

## Usage

```shell
man OPTIONS TARGET
```

| Option          | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `-f` `--whatis` | List available manuals for TARGET. Command `whatis` is equivalent. |
| `-H` `--html`   | Open manual in the browser.                                        |

Check all manuals for `sway`:

```shell
man -f sway
whatis sway
```

Open section 5 for sway:

```shell
man 5 sway
man sway.5
```
