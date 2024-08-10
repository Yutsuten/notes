---
title: Signals
ref: https://chromium.googlesource.com/chromiumos/docs/+/master/constants/signals.md
---

## List

Get a full list with `kill -L`.

| Signal | Value | Action | Comment |
| --- | --- | --- | --- |
| `SIGHUP` | 1 | Term | Hangup detected on controlling terminal or death of controlling process |
| `SIGINT` | 2 | Term | Interrupt from keyboard |
| `SIGQUIT` | 3 | Core | Quit from keyboard |
| `SIGILL` | 4 | Core | Illegal Instruction |
| `SIGABRT` | 6 | Core | Abort signal from abort(3) |
| `SIGFPE` | 8 | Core | Floating point exception |
| `SIGKILL` | 9 | Term | Kill signal |
| `SIGUSR1` | 10 | Term | User defined signal 1 |
| `SIGSEGV` | 11 | Core | Invalid memory reference |
| `SIGUSR2` | 12 | Term | User defined signal 2 |
| `SIGPIPE` | 13 | Term | Broken pipe: write to pipe with no |
| `SIGTERM` | 15 | Term | Termination signal |
