---
title: Importlib
ref: https://docs.python.org/3/library/importlib.html
---

## Reimport

Available in `Python >= 3.4`.

Useful when mocking,
where we may need to reimport to apply mocks created in runtime.

```python
from importlib import reload
reload(module)
```
