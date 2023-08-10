---
title: Inspect
ref: https://docs.python.org/3/library/inspect.html
---

## Usage

| Method | Description |
| --- | --- |
| `getsourcelines` | Return a list of source lines and starting line number for an object. |

## Example

Print source code of a function:

```python
import inspect
from my_module import my_function
code, line_no = inspect.getsourcelines(my_function)

## Simplest
print(''.join(code))

## With line numbers
for line in code:
  print(f'{line_no:4d} {line}', end='')
  line_no += 1
```
