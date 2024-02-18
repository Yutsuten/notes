---
title: ANSI escape
ref: https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters
---

## Syntax

- Start a sequence with `\033[` or `\e[`.
- Add the codes for the control sequence, separated by `;`.
- Close the sequence with `m`.

Example:

```shell
\033[37;1m
```

Here we used the codes `37` and `1`,
which changes the color to **white** and make it **bold**.

### Common codes

Styling:

| Code | Description |
| --- | --- |
| 0 | Reset |
| 1 | Bold |
| 2 | Dim |
| 3 | Italic |
| 4 | Underline |
| 7 | Invert BG and FG colors |
| 8 | Hide text |
| 9 | Strikethrough |

Coloring:

| FG code | BG code | Color |
| --- | --- | --- |
| 30 | 40 | Black |
| 31 | 41 | Red |
| 32 | 42 | Green |
| 33 | 43 | Yellow |
| 34 | 44 | Blue |
| 35 | 45 | Magenta |
| 36 | 46 | Cyan |
| 37 | 47 | White |
