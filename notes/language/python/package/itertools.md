---
title: Itertools
ref: https://docs.python.org/3/library/itertools.html
---

## Usage

```python
import itertools
```

Grouping data:

```python
for key, group in itertools.groupby(data, attrgetter('type')):
    print(key, list(group))
```

Blind repeat:

```python
for _ in itertools.repeat(None, 10):
    pass
```
