---
title: Date
man: date
---

## Usage

```shell
date OPTIONS FORMAT
```

| Option        | Description                        |
| ------------- | ---------------------------------- |
| `-d` `--date` | Use specified date instead of now. |

Between the `%` and the format sequence,
add `E` for the locale's alternate representation.

## Examples

Get formatted current time:

```shell
date                       # Wed 20 May 2020 01:17:13 PM JST
date '+%Y-%m-%d %H:%M:%S'  # 2020-05-20 13:18:19
date '+%Ex (%a) %H:%M'     # 令和07年02月07日 (金) 23:04
```

Get current timestamp:

```shell
date '+%s'  # 1742914507
```

Specify date relative to now:

```shell
date -d '+1 year'
date -d '1 year ago'
```

Specify date using a timestamp:

```shell
date -d @1735976522
```
