---
title: Pathlib
ref: https://docs.python.org/3/library/pathlib.html
---

::: info NOTE
Available from version 3.4.
:::

## Usage

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

### File manipulation

Read or write to file

```python
with Path.open(path, 'w') as myfile:
    myfile.write('content')
```

Create empty file (similar to `touch`)

```python
with Path.open(path, 'a'):
    os.utime(path, None)
```

### Iterate directory

```python
for node in Path('.').iterdir():
    if node.is_dir():
        pass
    if node.is_file():
        pass
```

### Delete file

```python
path.unlink()
```
