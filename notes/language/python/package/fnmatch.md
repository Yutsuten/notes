---
title: Fnmatch
ref: https://docs.python.org/3/library/fnmatch.html
---

## Import

```python
import fnmatch
```

## Glob on strings

Test whether the string matches the pattern.

```python
fnmatch.fnmatch('notes.txt', '*.txt')  # True
fnmatch.fnmatch('notes.txt', '*.png')  # False
```

Get a list of matched elements.

```python
fnmatch.filter(['notes.txt', 'image.png'], '*.txt')  # ['notes.txt']
```
