---
title: Date
---

## Usage

```shell
date OPTIONS FORMAT
```

| Option        | Description                        |
| ------------- | ---------------------------------- |
| `-d` `--date` | Use specified date instead of now. |

## Examples

Get formatted current time:

```shell
date                       # Wed 20 May 2020 01:17:13 PM JST
date '+%Y-%m-%d %H:%M:%S'  # 2020-05-20 13:18:19
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
