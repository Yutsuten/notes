---
title: String
ref: https://docs.python.org/3/library/stdtypes.html#string-methods
---

## Operators

```python
'Hello ' + 'world!'  # String concatenation.
u'こんにちは'       # String with unicode characters.
```

## Methods

Methods are called on the string,
like `text.method()`.

| Method | Description |
| --- | --- |
| `lower()` | Return a lowercased copy of the string. |
| `upper()` | Return a uppercased copy of the string. |
| `isalpha()` | Return `True` if it only has letters. |
| `isdigit()` | Return `True` if it only has numbers. |
| `isalnum()` | Return `True` if it has letters or numbers. |
| `startswith('prefix')` | Return `True` if string starts with the prefix, otherwise return `False`. |
| `endswith('prefix')` | Return `True` if string ends with the suffix, otherwise return `False`. |
| `replace('pattern', repl, count=0)` | Return a replaced copy of the string. (For regex use `re` package). |
| `split(' ')` | Return a list splitted by a delimiter string. |
| `splitlines()` | Return a list splitted by line breaks. |
| `join(iterable)` | Return a string which is the concatenation of the strings in iterable. |
| `strip(' ')` | Return a copy of the string with the leading and trailing characters removed. |
| `rstrip(' ')` | Return a copy of the string with the trailing characters removed. |
| `lstrip(' ')` | Return a copy of the string with the leading characters removed. |
| `decode('utf-8')` | Return a string decoded using the given encoding. |

## Functions

These are builtin keywords,
the string must be passed as a parameter.

| Function | Description |
| --- | --- |
| `len` | Return the number of characters in the string. |
| `ord` | Return an integer representing the Unicode code point of that character. |

## F-string

[External documentation](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)

*New in version 3.6.*

A formatted string literal or f-string is a string literal that is prefixed with `f` or `F`.

```python
name = 'John'
f'My name is {name}.'
```

To escape `{` or `}`, double it:

```python
number = 727
f'Number is {{ {number} }}'  # Out: 'Number is { 727 }'
```

### Format

Array-like usage:

```python
'{}{}{}'.format(a, b, c)
'{0}{1}{2}'.format(a, b, c)
```

Dictionary-like usage:

```python
'{name}'.format(name='John')
```

Numbers formatting:

```python
'{:03d}'.format(8)       # '008'
'{:,d}'.format(1234567)  # '1,234,567'
'{:+.4f}'.format(3.141592653589793)  # '+3.1416'
'{:-.4f}'.format(3.141592653589793)  # '3.1416' (default)
'{: .4f}'.format(3.141592653589793)  # ' 3.1416'
'{:.2%}'.format(0.2548)  # '25.48%'
```

Date formatting:

```python
'{:%Y/%m/%d %H:%M:%S}'.format(datetime.now())
```

Content alignment:

```python
'{:<10}'.format('left')    # 'left      '
'{:^10}'.format('center')  # '  center  '
'{:>10}'.format('right')   # '     right'
'{:_^10}'.format('fill')   # '___fill___'
```

## Docstring

- [Google Style Python Docstrings](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html)
