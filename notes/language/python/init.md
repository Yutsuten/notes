---
title: Init
---

It is used to declare the public API.

Used mainly when importing the `from package import *` way.

```python
## __init__.py
from .module import some_method
from .module import SomeClass

__all__ = ['module']
## module.some_method()

__all__ = ['some_method', 'SomeClass']
## some_method()
```
