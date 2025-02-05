---
title: CGI
ref: https://docs.ruby-lang.org/en/3.4/CGI.html
---

## Usage

The Common Gateway Interface (CGI)
provides functionality for retrieving HTTP request parameters,
managing cookies, and generating HTML output.

```ruby
require 'cgi'
```

To URL encode a string (`uri` library may also be useful):

```ruby
CGI.escape('hello world')
# => "hello%20world"
```
