---
title: Built-in
ref: https://docs.python.org/3/library/functions.html
---

## Common

```python
## Math
max(3, 4, 5)
min(3, 4, 5)
abs(-7)
sum(2, 3, 4)
round(3.14)  # Default 0 decimal digits
round(3.14, 1)  # 1 decimal digits

## Cast
str(3.14)
int(3.14)
float(3)

## Type
type(3.14) # == float
isinstance(3.14, float)

## Delete variable
del my_variable

## Console interaction
word = raw_input("Enter a word: ")
```

### Print

Print objects to the text stream `file`, separated by `sep` and followed by `end`.

```python
print(objects, sep=' ', end='\n', file=sys.stdout, flush=False)
print(objects, sep=' ', end='\n', file=sys.stderr, flush=False)
```

Example of printing without newline:

```python
print('Hello', end='')
```

## Vars

Return the `__dict__` attribute for a module, class, instance, or any other object with a `__dict__`
attribute.

```python
vars(instance)
```

## Function / method name

Get the function or method (with class name) as string.

```python
func.__name__
func.__qualname__
```
