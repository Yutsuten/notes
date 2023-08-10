---
title: Cron
---

## Run script at startup

```bash
crontab OPTION
```

| Option | Description |
| --- | --- |
| `-l` | View (list) crontabs. |
| `-e` | Edit crontabs. |
| `-r` | Remove crontabs. |

## Format

```txt
mm  hh  DD  MM  W /path/program [--option]...  ( W = weekday: 0-6 [Sun=0] )
```

| Symbol | Description |
| --- | --- |
| * | Wildcard, specifies every possible time interval |
| , | List multiple values separated by a comma. |
| - | Specify a range between two numbers, separated by a hyphen |
| / | Specify a periodicity/frequency using a slash |

| Keyword | Description |
| --- | --- |
| `@reboot` | At startup. |
| `@yearly` | Once a year. |
| `@annually` | Same as `@yearly`. |
| `@monthly` | Once a month. |
| `@weekly` | Once a week. |
| `@daily` | Once a day. |
| `@midnight` | Same as `@daily`. |
| `@hourly` | Once an hour. |

## Example

```txt
@reboot ${HOME}/test.sh
```

To check if it is running:

```bash
ps -ef | grep test
```
