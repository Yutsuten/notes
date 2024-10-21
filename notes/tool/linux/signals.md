---
title: Signals
ref: https://www.chromium.org/chromium-os/developer-library/reference/linux-constants/signals/
man: signal.7
---

## List

Get a full list with `kill -L`.

| Signal | Value | Shortcut | Comment                                                                 |
| ------ | ----- | -------- | ----------------------------------------------------------------------- |
| `HUP`  | 1     |          | Hangup detected on controlling terminal or death of controlling process |
| `INT`  | 2     | `Ctrl+C` | Interrupt from keyboard                                                 |
| `QUIT` | 3     | `Ctrl+\` | Quit from keyboard                                                      |
| `KILL` | 9     |          | Kill signal                                                             |
| `USR1` | 10    |          | User-defined signal 1                                                   |
| `USR2` | 12    |          | User-defined signal 2                                                   |
| `TERM` | 15    |          | Termination signal                                                      |
| `CONT` | 18    |          | Continue if stopped                                                     |
| `STOP` | 19    |          | Stop process (prefer `TSTP`)                                            |
| `TSTP` | 20    | `Ctrl+Z` | Stop typed at terminal                                                  |
