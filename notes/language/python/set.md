---
title: Set
---

Useful for removing duplicate values from a list
and to perform common math operations like union and intersection.

## Usage

```python
myset = {1, 2, 3}
myset = set([1, 2, 3])  # set() for empty set
myset.add(4)
myset.remove(1)
myset.pop()
myset.clear()

myset1.isdisjoint(myset2)  # True if there are no common values
myset1.issubset(myset2)

list(diff_set)
```

### Union

```python
myset1.union(myset2)
myset1 | myset2
```

### Intersection

```python
myset1.instersection(myset2)
myset1 & myset2
```

### Difference

```python
myset1.difference(myset2)
myset1 - myset2
```

### Symmetric difference

```python
myset1.symmetric_difference(myset2)
myset1 ^ myset2
```
