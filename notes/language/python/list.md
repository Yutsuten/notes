---
title: List
ref: https://docs.python.org/3/tutorial/datastructures.html
---

## Constructors

```python
my_list = ['a', 'b', 'c']
my_list = list(obj)
my_list = [expression for value in input_set (if predicate)]
```

## Operators

```python
value = my_list[1]                  # Get element from index
my_list = list1 + list2             # Concatenation
my_list = my_list[start:stop:step]  # Slicing (step default is 1)
```

## Methods

| Method | Description |
| --- | --- |
| `insert(index, object)` | Insert an item at a given position. |
| `append(object)` | Add an item to the end of the list. |
| `extend(iterable)` | Extend the list by appending all the items from the iterable. |
| `remove(object)` | Removes the first item from the list which matches the specified value. |
| `pop()` | Removes and returns the item at the specified index (default to last item). |
| `index(item)` | Returns the index of the first occurrence of the specified list item. |
| `count(item)` | Returns the number of times the specified item appears in the list. |
| `sort()` | Sorts the list in place. |
| `reverse()` | Reverse the elements of the list in place. |

## Functions

These are builtin keywords,
the list must be passed as a parameter.

| Function | Description |
| --- | --- |
| `len(collection)` | Returns an int type specifying number of elements in the collection. |
| `min(collection)` | Returns the smallest item from a collection. |
| `max(collection)` | Returns the largest item in an iterable or the largest of two or more arguments. |
| `sum(iterable)` | Returns a total of the items contained in the iterable object. |
| `sorted(iterable)` | Returns a sorted list from the iterable. |
| `reversed(sequence)` | Returns a reverse iterator over a sequence. |
| `all(iterable)` | Returns a Boolean value that indicates whether the collection contains only values that evaluate to True. |
| `any(iterable)` | Returns a Boolean value that indicates whether the collection contains any values that evaluate to True. |
| `enumerate(sequence)` | Returns an enumerate object. |
| `zip(iterable, ...)` | Returns a list of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables. |
| `map(func, iterable)` | Return an iterator that applies function to every item of iterable, yielding the results. |
| `reduce(func, iterable, start)` | Applies function of two arguments cumulatively to the items of iterable, so as to reduce the iterable to a single value. Requires: `from functools import reduce` |

## Examples

### List generation

```python
my_list = list(range(3))        # => [0, 1, 2]
my_list = list(range(1, 7))     # => [1, 2, 3, 4, 5, 6]
my_list = list(range(1, 7, 2))  # => [1, 3, 5]
```

### List comprehension

```python
my_list = [x for x in range(1, 6)]                # => [1, 2, 3, 4, 5]
my_list = [x * 2 for x in range(1, 6)]            # => [2, 4, 6, 8, 10]
my_list = [x for x in range(1, 6) if x % 2 == 0]  # => [2, 4]
```

### List operations

Map:

```python
map(lambda x: x*x, my_list)
```

Reduce:

```python
from functools import reduce
reduce(lambda total, cur: total + cur, numbers, 0)
```

### Slicing

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
sliced1 = my_list[1:8:2]  # => [1, 3, 5, 7]
sliced2 = my_list[::2]    # => [0, 2, 4, 6, 8]
sliced3 = my_list[1:8]    # => [1, 2, 3, 4, 5, 6, 7]
sliced4 = my_list[::-1]   # => [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

### Copy

Shallow copy:

```python
list_copy = my_list.copy()
```

Deep copy:

```python
from copy import deepcopy
list_copy = deepcopy(my_list)
```

### Sort

```python
list_of_dicts.sort(key=itemgetter('date'))
my_list = sorted(list_of_instances, key=attrgetter('type'))
```
