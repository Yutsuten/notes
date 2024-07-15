---
title: Dictionary
ref: https://docs.python.org/3/library/stdtypes.html#dict
---

## Constructors

```python
my_dict = {'name': 'John', 'age': 28}
my_dict = dict(name='John', age=28)
my_dict['hobby'] = 'games'
```

Delete key from dictionary:

```python
del my_dict['key']
```

## Methods

| Method | Description |
| --- | --- |
| `get` | Get the value for key if key is in the dictionary, else default (`None`). |
| `pop` | Same as get, but removes the key. |
| `keys` | List of keys |
| `values` | List of values |
| `update` | Merge dicts |

```python
value = mydict.get(key)
value = my_dict.pop(key, None)

my_dict.update(another_dict)
```

## Flow control

Check if `key` exists in `mydict`:

```python
if key in mydict:
    print(mydict[key])

if key in mydict.keys():
    print(mydict[key])
```

Loop all keys and/or values:

```python
for key in my_dict:
    print(key, my_dict[key])

for key, value in my_dict.items():
    print(key, value)
```

## Examples

### Get first key

Better performance than creating a list ang getting only the first element.

```python
first_key = next(iter(my_dict))
```

### Clear empty values

```python
cleared = {key: value for key, value in errors.items() if value}
```

### Copy

Shallow

```python
dict(my_dict)
my_dict.copy()
```

Deep

```python
import copy
copy.deepcopy(my_dict)
```
