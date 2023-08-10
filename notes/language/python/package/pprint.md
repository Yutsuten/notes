---
title: Pprint
ref: https://docs.python.org/3/library/pprint.html
---

## Usage

Print using defaults:

```python
from pprint import pprint
pprint(my_dict)
```

Print customized:

```python
from pprint import PrettyPrinter
pp = PrettyPrinter(
  indent=1,
  width=80,
  depth=None,
  stream=None,
  *,
  compact=False,
  sort_dicts=True,
  underscore_numbers=False
)
pp.pprint(my_dict)
```
