---
title: Pathlib
ref: https://docs.python.org/3/library/pathlib.html
---

## Usage

:::info
Available from version 3.4.
:::

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

| Mode | Description |
| ---- | ----------- |
| `r` | Open for reading (default). |
| `w` | Open for writing, truncating the file first. |
| `x` | Open for exclusive creation, failing if the file already exists. |
| `a` | Open for writing, appending to the end of the file if it exists. |
| `b` | Binary mode. |
| `t` | Text mode (default). |
| `+` | Open for updating (reading and writing). |

Line ending [reference](https://en.wikipedia.org/wiki/Newline):

| OS      | Line ending |
| ------- | ----------- |
| Linux   | `\n`        |
| Windows | `\r\n`      |

Read or write to file

```python
with Path.open(path, 'r') as f:
    all_text = f.read()
    lines_list = f.readlines()

with Path.open(path, 'w') as f:
    f.write('content')
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
