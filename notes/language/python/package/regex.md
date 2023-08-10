---
title: Regex
ref: https://docs.python.org/3/library/re.html
---

## Replace

```python
import re

re.sub(r'regex', repl, text, count=0)
```

## Search

```python
import re

iter_obj = re.finditer(r'<img.*?[^>]>', text)
match_obj = re.search(r'upload_id=(\d+)', html_tag)

match_obj.group(0)  # The whole match
match_obj.group(1)  # Capturing group 1
```
