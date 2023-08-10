---
title: Pathlib
ref: https://docs.python.org/3/library/pathlib.html
---

## Usage

**Note:** Available from version 3.4.

```python
from pathlib import Path
```

Create a `Path` variable:

```python
path = Path('/home/suguri/file.txt')
str(path)  # '/home/suguri/file.txt'
```

### Path manipulation

```python
path.parent    # PosixPath('/home/suguri')
path.stem      # file
path.suffix    # .txt

path1 / path2  # Same as os.path.join(path1, path2)
```

### Delete file

```python
path.unlink()
```
