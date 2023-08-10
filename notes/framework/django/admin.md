---
title: Admin
---

## Site

Admin site: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

### appname/admin.py

```python
from django.contrib import admin
from . import models

admin.site.register(models.ModelName)
```
