---
title: Prompt
ref: https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html
---

## Usage

Set the environment variable `PROMPT`.

Simple example:

```shell
PROMPT="%n@%m:%~ $ "
```

### Login information

| Sequence | Description |
| --- | --- |
| `%n` | `$USERNAME`. |
| `%m` | The hostname up to the first `.`. |

### Shell state

| Sequence | Description |
| --- | --- |
| `%~` | Current working directory. `$HOME` is `~` |
| `%#` | A `#` if the shell is running with privileges, a `%` if not. Equivalent to `%(!.#.%%)`. |

### Date and time

| Sequence | Description |
| --- | --- |
| `%D` | The date in yy-mm-dd format. |
| `%*` | Current time of day in 24-hour format, with seconds. |
| `%D{date}` | Date formatted using the strftime function. Ex: `%Y/%m/%d %H:%M:%S` |

### Visual effects

| Sequence | Description |
| --- | --- |
| `%B (%b)` | Start (stop) boldface mode. |
| `%F (%f)` | Start (stop) using a different foreground colour. Ex: `%F{13}` |
