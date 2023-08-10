---
title: Debug
ref: https://docs.python.org/3/library/pdb.html
---

## Debug mode

This will run the script in loop.

```shell
python -m pdb -c continue path/to/script.py
```

## Add breakpoints

```python
## ...
breakpoint()  # Python 3.7+
import pdb; pdb.set_trace()
## ...
```

### Basic usage

| Command | Meaning | Explanation |
| --- | --- | --- |
| `h` | help | Print the list of available commands |
| `w` | where | Print a stack trace |
| `s` | step | Execute the current line, stop at the first possible occasion |
| `n` | next | Continue execution until the next line in the current function is reached or it returns |
| `unt N` | until | Continue execution until a line with a number greater or equal to N (default next) is reached |
| `r` | return | Continue execution until the current function returns |
| `c` | continue | Continue execution, only stop when a breakpoint is encountered |
| `l` | list | List 11 lines around the current line |
| `ll` | longlist | List all source code for the current function or frame |
| `u` | up | Move the current frame count (default one) levels up in the stack trace |
| `d` | down | Move the current frame count (default one) levels down in the stack trace |
| `p EXP` | print | Print the value of EXPression |
| `pp EXP` | pretty-print | Pretty-print the value of EXPression |
| `whatis EXP` | whatis | Print the type of the EXPression |
| `q` | quit | Quit from the debugger. The program being executed is aborted |

## Enter post-mortem debugging

```python
import pdb; pdb.pm()
```
