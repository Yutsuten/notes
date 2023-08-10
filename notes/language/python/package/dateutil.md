---
title: Dateutil
---

The dateutil module provides powerful extensions to the standard datetime module.

## Install

```shell
pip install python-dateutil
```

## Usage

```python
from dateutil import tz, parser
from dateutil.relativedelta import relativedelta
```

Getting a timezone:

```python
UTC = tz.tzutc()  # tz.gettz('UTC')
JST = tz.gettz('Asia/Tokyo')
```

Parsing a date automatically:

```python
mydate = parser.parse('2018-04-30T06:37:10.751Z')
```

Incrementing months is very easy with `relativedelta`,
because it automatically deals with edge cases like months with different quantity of days.

```python
datetime(2021, 1, 31) + relativedelta(months=1)  # February 28th
```
