---
title: URI
ref: https://docs.ruby-lang.org/en/3.4/URI.html
---

## Usage

Ease handling of Uniform Resource Identifiers.

```ruby
require 'uri'
```

To URL encode a string (`cgi` library may also be useful):

```ruby
URI.encode_www_form_component('hello world')
# => "hello+world"
```

To URL encode multiple query parameters:

```ruby
URI.encode_www_form({ search: 'hello world', page: 1 })
# => "search=hello+world&page=1"
```

Useful to update the URL for a request:

```ruby
url = URI('https://example.com/')
url.query = URI.encode_www_form({ search: 'hello world', page: 1 })
```
