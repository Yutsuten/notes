---
title: Decorator
ref: https://docs.python.org/3/library/functools.html#functools.wraps
---

## Usage

It is good manners to use the functools' wraps.

```python
from functools import wraps
```

Decorator declaration syntax:

```python
def my_decorator(func):
  @wraps(func)
  def wrapper(*args, **kwargs):
    print('Start')
    result = func(*args, **kwargs)
    print('End')
    return result
  return wrapper
```

Use it with:

```python
@my_decorator
def hello_world():
  print('Hello World')
  return 0
```
