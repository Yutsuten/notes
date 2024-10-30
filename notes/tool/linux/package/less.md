---
title: Less
---

## Usage

```shell
less OPTIONS FILE
```

| Option | Description                                             |
| ------ | ------------------------------------------------------- |
| `+`    | Automatically run commands                              |
| `-F`   | Quit if one screen                                      |
| `-I`   | Search ignoring case even if pattern has uppercase      |
| `-J`   | Displays a status column at the left edge of the screen |
| `-N`   | Show line numbers                                       |
| `-R`   | Show colors                                             |
| `-S`   | Chop long lines                                         |
| `-X`   | Do not clean the screen                                 |
| `-i`   | Search ignoring case if pattern is only lowercase       |
| `-n`   | Supress line numbers                                    |

It is also possible to toggle any option by typing `-` and its character.
For example, to show line numbers: `-N`.

### Searching

Jump to line with a match:

- Use `/` or `?` to search (`!` to invert selection)
- Then `n` or `N` to jump between matches
- `ESC`+`U` to clear

Show only lines with a match:

- Use `&` to search (`!` to invert selection)
- `&`+`ENTER` to clear

### Commands

| Command          | Description                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `g`              | Go to first line.                                                                                                                 |
| `G`              | Go to last line.                                                                                                                  |
| `F`              | Follow mode, `ctrl+C` to cancel.                                                                                                  |
| `m`              | Followed by any lowercase or uppercase letter, marks the first displayed line with that letter.                                   |
| `s FILENAME`     | Save the input to a file.                                                                                                         |
| `\|` `<m>` `CMD` | `<m>` represents any mark letter (`^` start; `$` end; `.` current). Pipes a section of the input file to the given shell command. |
| `:n`             | Examine  the next file in the command line list.                                                                                  |
| `:p`             | Examine the previous file in the command line list.                                                                               |

Examples:

To copy the current screen to the clipboard,
press `|`, then `.` and any of the following:

```shell
wl-copy
xclip -sel clip
```
