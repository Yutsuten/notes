---
title: Urllib
ref: https://docs.python.org/3/library/urllib.parse.html#module-urllib.parse
---

## Parse

```python
from urllib.parse import urlparse, parse_qs, urlencode, urlunparse, ParseResult
```

Parsing URL and query string:

```python
parsed_url = urlparse('https://example.com?greet=true')  # ParseResult
parsed_qs = parse_qs(parsed_url.query)                   # Dictionary
```

Creating new ParseResult instance:

```python
parsed_url = ParseResult(
    'https',        # Scheme
    'example.com',  # Netloc
    'some/path',    # Path
    '',             # Params (semi-colon separated, usually not used)
    'greet=true',   # Query
    'fragment',     # Fragment
)
## 'https://example.com/some/path?greet=true#fragment'
```

Unparsing URL and query string:

```python
query = urlencode({'greet': 'true'})  # String
url = urlunparse(parsed_url)          # String
```

*Tip: If using the requests package,
you may use the query string as a dictionary.*
