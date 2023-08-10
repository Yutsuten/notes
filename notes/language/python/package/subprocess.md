---
title: Subprocess
ref: https://docs.python.org/3/library/subprocess.html
---

## Usage

Run the command described by args.
Wait for command to complete,
then return a CompletedProcess instance.

```python
import subprocess
```

### Run in foreground

```python
subprocess.run(['program', 'argument'], check=True)
```

Get the `stdout` and `stderr`:

```python
result = subprocess.run(
  ['xbacklight', '-get'], text=True, capture_output=True, check=True)
result.stdout
result.stderr
```

### Run in background

*Note: This note was originally written for python 2,
not sure if it still works.*

Instantiate `Popen`, wait with `popen.communicate()`,
kill it with `popen.kill()`,
and get the return code with `popen.poll()` (None if haven't finished yet).
