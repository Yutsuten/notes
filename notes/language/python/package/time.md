---
title: Time
ref: https://docs.python.org/3.9/library/time.html
---

## Usage

Import the module:

```python
import time
```

| Method | Description |
| --- | --- |
| `time` | Return the time in seconds since the epoch as a floating point number. |
| `sleep` | Suspend execution of the calling thread for the given number of seconds. |

## Examples

Get the difference in time between two places of the code.

```python
start_time = time.time()
## ...
seconds_elapsed = time.time() - start_time
```
