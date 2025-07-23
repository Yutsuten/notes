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

Joining paths:

```python
path1 / path2  # Same as os.path.join(path1, path2)
```

### Path manipulation

```python
path.name    # basename
path.stem    # basename without suffix
path.suffix  # .txt
path.parent  # PosixPath('/home/suguri')
```

Create a new directory:

```python
path.mkdir(exist_ok=True)
```

Create a new file:

```python
path.touch()
```

Iterate a directory:

```python
for node in Path('.').iterdir():
    if node.is_dir():
        pass
    if node.is_file():
        pass
```

### File manipulation

| Mode | Use       | Create file                         | Keep contents                       |
| ---- | --------- | ----------------------------------- | ----------------------------------- |
| `r`  | Reading   | <span class="center red">✘</span>   | <span class="center green">✔</span> |
| `w`  | Writing   | <span class="center green">✔</span> | <span class="center red">✘</span>   |
| `a`  | Appending | <span class="center green">✔</span> | <span class="center green">✔</span> |
| `x`  | X-Writing | <span class="center green">✔</span> | <span class="center">-</span>       |

::: info
Mode `x` stands for **exclusive creation**,
and will always fail if the file already exists.
:::

Extra modes (append to the mode above):

| Mode | Description                              |
| ---- | ---------------------------------------- |
| `t`  | Text mode (default).                     |
| `b`  | Binary mode.                             |
| `+`  | Open for updating (reading and writing). |

Line ending ([reference](https://en.wikipedia.org/wiki/Newline)):

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

### Delete file

```python
path.unlink()
```
