---
title: Path
---

## Adding directories to path

```python
import os
import sys

sys.path.insert(0, '{}/mymodule'.format(os.getcwd()))
```
