---
title: Pillow
ref: https://pillow.readthedocs.io/en/stable/reference/index.html
---

Library with image processing capabilities.

## Install

```shell
pip install --user Pillow
```

## Basic

```python
from PIL import Image
with Image.open(filepath) as img:
    width, height = img.size
```
