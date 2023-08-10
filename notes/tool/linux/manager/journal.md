---
title: Journal
ref: https://wiki.archlinux.org/title/Systemd/Journal
---

## Usage

```shell
journalctl OPTIONS
```

| Option | Description |
| --- | --- |
| `-b` `--boot` | Show messages from a specific boot. Defaults to current boot. |
| `-S` `--since` | Show messages from date. |
| `-U` `--until` | Show messages until date. |
| `-u` `--unit` | Show messages for the specified systemd unit. |
| `-k` `--dmesg` | Show only kernel messages. This implies `-b`. |
| `-p` `--priority` | Filter output by message priorities or priority ranges. |

Priority levels are: `emerg` (0), `alert` (1), `crit` (2), `err` (3), `warning` (4), `notice` (5),
`info` (6), `debug` (7).

## Examples

Show messages from the previous boot.

```shell
journalctl -b -1
```

Show messages between a specified time frame.

```shell
journalctl --since "2021-07-17 10:00:00" --until "2021-07-17 22:00:00"
```

Show messages by a specific systemd unit.

```shell
journalctl -u man-db.service
```

Show only error or more important logs.

```shell
journalctl -p err
```
