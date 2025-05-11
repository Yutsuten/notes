---
title: File
ref: https://docs.python.org/3/library/functions.html#open
---

## Usage

:::tip
If using Python 3.4+, prefer using `pathlib` instead.
:::

Open file and return a corresponding file object.

```python
open(path, mode, encoding='utf-8')
```

*Obs: If dealing with text file,
setting the encoding is recommended.*

| Mode | Description |
| ---- | ----------- |
| `r` | Open for reading (default). |
| `w` | Open for writing, truncating the file first. |
| `x` | Open for exclusive creation, failing if the file already exists. |
| `a` | Open for writing, appending to the end of the file if it exists. |
| `b` | Binary mode. |
| `t` | Text mode (default). |
| `+` | Open for updating (reading and writing). |

It may also be useful to check out the contents of `package > os` for system wide operations.

Line ending [reference](https://en.wikipedia.org/wiki/Newline):

| OS      | Line ending |
| ------- | ----------- |
| Linux   | `\n`        |
| Windows | `\r\n`      |

## Examples

Write an audio file:

```python
with open('sound.mp3', 'wb') as audio_file:
    audio_file.write(data)
```

Read a text file:

```python
with open(os.path.join('path', 'to', 'file.txt'), 'r', encoding='utf-8') as f:
    all_text = f.read()
    lines_list = f.readlines()  # Keeps \n at the end
    each_line_as_element_in_list = f.readlines()
```

Append some text to a text file:

```python
with open('existing_file.txt', 'a', encoding='utf-8') as f:
    f.write('Hello World')
```

Read only the last line of a file:

```python
import os

with open('filename.txt', 'rb') as f:
    try:  # catch OSError in case of a one line file
        f.seek(-2, os.SEEK_END)
        while f.read(1) != b'\n':
            f.seek(-2, os.SEEK_CUR)
    except OSError:
        f.seek(0)
    last_line = f.readline().decode()
```
