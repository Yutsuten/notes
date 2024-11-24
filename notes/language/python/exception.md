---
title: Exception
ref: https://docs.python.org/3/tutorial/errors.html
---

## Raise / except

Single:

```python
try:
    raise Exception('No way!')
except Exception as err:
    print('Error: {}'.format(str(err)))
    raise
```

Multiple:

```python
try:
    some_function()
except (RuntimeError, TypeError, NameError):
    pass
```

## Create custom exception

```python
class CustomError(Exception):
    """Custom error's base exception."""
    def __init__(self, message: str):
        super().__init__(f'Error ocurred - {message}')

class ApplicationSpecificError(CustomError):
    """An application specific error that inherits CustomError."""
    def __init__(self):
        super().__init__('Application specific exception was raised.')
```
