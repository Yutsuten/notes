---
title: Ss
man: ss
---

## Usage

Utility to investigate sockets.

```shell
ss OPTIONS
```

| Option             | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `-t` `--tcp`       | Display TCP sockets.                                 |
| `-l` `--listening` | Display only listening sockets (omitted by default). |
| `-n` `--numeric`   | Do not try to resolve service names.                 |
| `-p` `--processes` | Show process using socket.                           |

Show currently used ports with process info:

```shell
ss -tlnp
```
