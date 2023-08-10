---
title: Natsort
pypi: natsort
---

## Usage

Natural sorting in Python.

```python
from natsort import natsorted, ns
```

### API

| Parameter | Type | Description |
| --- | --- | --- |
| `seq` | iterable | The input to sort. |
| `key` | callable, optional | A key used to determine how to sort each element of the iterable. It is not applied recursively. It should accept a single argument and return a single value. |
| `reverse` | bool, optional | Return the list in reversed sorted order. The default is False. |
| `alg` | ns enum, optional | This option is used to control which algorithm natsort uses when sorting. For details into these options, please see the `ns` class documentation. The default is `ns.INT`. |

## Example

Ignore case and reverse sort:

```python
result = natsorted(myarray, reverse=reverse, alg=ns.IGNORECASE)
```
