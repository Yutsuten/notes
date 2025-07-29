---
title: Os
ref: https://docs.python.org/3/library/os.html
---

## Usage

```python
import os
```

### Environment variables

```python
os.environ.get('HOME')
```

### Local files

:::info
For path manipulations, prefer using [pathlib](/language/python/package/pathlib).
:::

| Method | Description |
| --- | --- |
| `os.listdir(path)` | List a directory. |
| `os.mkdir(path)` | Create a new directory. |
| `os.path.expanduser(path)` | Expand `~` inside `path`. |
| `os.path.join(path1, path2)` | Join directories. |
| `os.path.exists(path)` | Check if file or folder exists. |
| `os.path.isfile(path)` | Check if file exists. |
| `os.path.isdir(path)` | Check if folder exists. |

#### Examples

```python
os.path.join(os.path.expanduser('~/Documents'), 'file.txt')
```

## Forcing slash style

To force using Linux or Windows directory separator,
use one of the bellow:

```python
import ntpath
import posixpath

ntpath.join(path1, path2)     # Windows backslash style
posixpath.join(path1, path2)  # Linux slash style
```
