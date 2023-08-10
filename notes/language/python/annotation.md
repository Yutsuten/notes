---
title: Annotation
ref: https://docs.python.org/3/library/typing.html
---

## Overview

## Types

### Primitives

```python
from collections.abc import *
from typing import *  # Deprecated
```

- Any: `Any`
- Number: `int` `float`
- String: `str`
- Boolean: `bool`
- List: `tuple[Type]` `list[Type]`
- Dict: `dict[Type1, Type2]`
- Set: `Set` `FrozenSet`
- Symbol: -
- Function: `Callable[[Arg1Type, Arg2Type], ReturnType]`
- Empty: `None`
- Unset: `TypeVar` `Generic`
- Never: `Never` `NoReturn`
- Union: `|` `Literal` `Union` `Optional` `Concatenate`
- Class: `Self` `ClassVar`
- Final: `Final`

### Usage

For variables:

```python
hello: str = 'Hello World'
value: int = 10
dict1: dict[str, str] = {}
ids: list[int] = [0, 1]
```

For functions:

```python
def greeting() -> str:
    return 'Hello'
```

For classes:

```python
class UserAccount:
    stats: ClassVar[dict[str, int]] = {}  # class variable
    damage: int = 10                      # instance variable

    def __init__(self: Self, damage: int) -> None:
        self.damage = damage

    def greet(self: Self, text: str) -> None
        print(text)
```

### Custom types / interfaces

Decide which values are accepted:

```python
MyBool = Literal[True, False]
WindowStates = Literal['open', 'closed', 'minimized']
PositiveOddNumbersUnderTen = Literal[1, 3, 5, 7, 9]
```

Generic types (like `list`):

```python
NumberList: TypeAlias = list[int]
ObjectWithNameList: TypeAlias = list[dict['name', str]]
```
