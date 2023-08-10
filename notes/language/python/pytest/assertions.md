---
title: Assertions
ref: https://docs.pytest.org/en/stable/assert.html
---

## Basic

```python
assert 3 > 4
```

## Exception

Assert that an exception is raised.

```python
import pytest

with pytest.raises(ZeroDivisionError):
  result = 10 / 0
```
