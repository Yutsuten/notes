---
title: Syntax
---

## Comment

```py
## Single line comment

'''
Multi-line
comment
'''
```

## Variables

```py
my_int = 7
my_float = 1.234
my_bool = True
my_string = 'I\'m new here!' # May be used as array
my_array = [1, 2, 3, 4]
my_dict = {'name': 'John', 'age': 28}
```

## Simple operations

```py
addition = 72 + 23
subtraction = 108 - 204
multiplication = 108 * 0.5
division = 108 / 9
exponentiation = 10 ** 2
modulo = 10 % 2
```

## Bool evaluations

```py
100 == (2 * 50) and 19 <= 19
-22 >= -18 or 99 != (98 + 1)
not False
```

Unlike other programming languages,
comparison operations can be chained.

```py
1 < 2 < 3
```

## Function

Using `return`:

```py
def spam():
    eggs = 12
    return eggs

lambda (parameters): (return expression)
```

Using `yield` (efficient memory usage):

:::tip
Useful for creating generator functions to produce a sequence of values lazily,
meaning it generates values one at a time and only when requested,
rather than all at once.

The function's state between calls is retained and can resume execution from where it left off.
:::

```py
# Flask / SQLAlchemy example
result = session.execute(query.execution_options(yield_per=1000))

def generate_csv(result):
    for row in result:
        yield ','.join(map(str, row)) + '\n'

return Response(
    generate_csv(result),
    mimetype='text/csv',
    headers={'Content-Disposition': 'attachment;filename=data.csv'},
)
```

### Main function

It is possible to run it as a standalone script.

```python
#!/usr/bin/env python
import sys

def main(argv=None):
    if argv is None:
        argv = sys.argv
    if len(argv) != 2:
        sys.stderr.write('Argument is required.\n')
        return 1
    stdin = None if sys.stdin.isatty() else sys.stdin.read()
    return 0

if __name__ == '__main__':
    sys.exit(main())
```

## With

Automatically close the object as soon as the `with` block finishes.

```py
with open('sound.mp3', 'wb') as audio_file:
    audio_file.write(data)
```

If returning from within a `with` block,
some care must be taken because the object with be closed as soon as we return.

By sending the object as an argument to the function,
it will be kept open until the function finishes
(useful if using `yield` in the function).

```py
with open('sound.mp3', 'wb') as audio_file:
    return lazy_write_data(audio_file)
```

## Modules

Importing modules:

```python
# External modules
import math
from math import sqrt
from math import *

# From project
from . import mymodule
```
