---
title: Collections
ref: https://docs.python.org/3/library/collections.html
---

## Usage

### Named tuple

```python
from collections import namedtuple
```

First create a Class-like object with the desired fields:

```python
QueryResult = namedtuple('QueryResult', ['id', 'name', 'status'])
```

Create instances and use it:

```python
tom = QueryResult(id=1, name='Tom', status='active')
tom.id
```

### Counter

To count the number of occurrences of an element,
use `collections.Counter`.

```python
from collections import Counter
```

Useful, for example, to check if two lists have the same elements regardless of order:

```python
Counter(list1) == Counter(list2)
```
