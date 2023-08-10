---
title: Timezone
---

Access some pre-defined timezones through `django.utils.timezone`.

```python
from django.utils import timezone

datetime.datetime(2018, 6, 2).replace(tzinfo=timezone.utc)
```
