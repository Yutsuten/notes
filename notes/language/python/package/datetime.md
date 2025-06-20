---
title: Datetime
ref: https://docs.python.org/3/library/datetime.html
---

## Usage

Import:

```python
from datetime import datetime, timedelta, timezone
```

Create a copy of a `date` or `datetime` instance:

```python
date_copy = original.replace()

import copy
date_copy = copy.copy(original)
```

### Datetime

| Attributes    | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| `year`        | Between MINYEAR (1) and MAXYEAR (9999) inclusive.                      |
| `month`       | Between 1 and 12 inclusive.                                            |
| `day`         | Between 1 and the number of days in the given month of the given year. |
| `hour`        | In `range(24)`.                                                        |
| `minute`      | In `range(60)`.                                                        |
| `second`      | In `range(60)`.                                                        |
| `microsecond` | In `range(1000000)`.                                                   |
| `tzinfo`      | Time zone information.                                                 |

Generating `datetime` objects:

| Method                          | Description                                                                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `now(tz)`                       | Current local date and time. Timezone defaults to `None`.                                                                                                         |
| `fromtimestamp(ts)`             | Local date and time corresponding to the POSIX timestamp.                                                                                                         |
| `fromisoformat(date_string)`    | Local date and time given a string formatted in the ISO 8601 format.                                                                                              |
| `strptime(date_string, format)` | Local date and time given a string formatted according to the given [format](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes). |

Current date and time:

```python
now_utc = datetime.now(timezone.utc)
now_jst = datetime.now(timezone(timedelta(hours=9)))
```

Arbitrary values:

```python
mydate = datetime(2018, 5, 2, 10, 30)
mydate = datetime.fromtimestamp(1525069936)
mydate = datetime.fromisoformat('2011-11-04 00:05:23.283')
mydate = datetime.strptime('2018-04-30 13:45:01', '%Y-%m-%d %H:%M:%S')
```

Generating `string` from `datetime` objects:

| Method               | Description                                                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isoformat(sep='T')` | String representing the date and time in ISO 8601 format.                                                                                                            |
| `strftime(format)`   | String representing the date and time formatted according to the given [format](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes). |

```python
strdate = mydate.isoformat()
strdate = mydate.strftime('%Y-%m-%d_%H-%M-%S')
```

### Timedelta

Get a date with the next month
(See also `dateutil.relativedelta`).

```python
future_date = mydate.replace(day=1) + timedelta(days=32)
```

Difference between dates.

```python
difference = datetime.now() - datetime(2020, 1, 1)  # timedelta object
seconds = difference.total_seconds()
str(difference)  # '3:57:20'
```

### Timezone

Replace timezone (does not change the time itself):

```python
UTC = timezone.utc
JST = timezone(timedelta(hours=9))

utcdate = mydate.replace(tzinfo=UTC)
jstdate = utcdate.astimezone(JST)
```
