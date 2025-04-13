---
title: Regex
ref: https://docs.python.org/3/library/re.html
---

## Match

Use `match` or `fullmatch` to check for matches.
It returns the match if succeeds, `None` on fail.

```py
is_match = re.fullmatch('[0-9]{4}-[0-9]{2}', text) is not None
is_match = re.match('^[0-9]{4}-[0-9]{2}$', text) is not None
```

## Search

Extract text from a string:

```py
import re

iter_obj = re.finditer(r'<img.*?[^>]>', text)
match_obj = re.search(r'upload_id=(\d+)', html_tag)

match_obj.group(0)  # The whole match
match_obj.group(1)  # Capturing group 1
```

## Replace

```py
import re

re.sub(r'regex', repl, text, count=0)
```
