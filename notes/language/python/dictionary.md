---
title: Dictionary
---

## Usage

```python
my_dict = {'name': 'John', 'age': 28}
my_dict['hobby'] = 'games'

my_dict.keys()    # List of keys
my_dict.values()  # List of values
my_dict.update(another_dict)  # Merge dicts

for key in my_dict:
    print(key, my_dict[key])

for key, value in my_dict.items():
    print(key, value)

del my_dict['key']
my_dict.pop('key', None)  # Does not raise exception
```

### Get first key

Better than creating a list ang getting only the first element.

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
