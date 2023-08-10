---
title: Main
---

## Basic

You may run it as a standalone script.

```python
##!/usr/bin/env python
import sys

def main(argv=None):
    if argv is None:
        argv = sys.argv
    if len(argv) != 2:
        sys.stderr.write('Argument is required.\n')
        return 1
    stdin = None if sys.stdin.isatty() else sys.stdin.read()
    return 0

if __name__ == '__main__':
    sys.exit(main())
```
