---
title: Shutil
ref: https://docs.python.org/3/library/shutil.html
---

## Copying files

```python
import shutil

shutil.copyfile(src, dst)  # File contents only, dst must be a file
shutil.copy(src, dst)      # Copies permissions, dst may be a directory
shutil.copy2(src, dst)     # Also copies metadata
```

## Moving files

```python
shutil.move(src, dst)
```
