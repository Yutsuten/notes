---
title: Net::HTTP
ref: https://docs.ruby-lang.org/en/3.4/Net/HTTP.html
---

## Usage

Library to make HTTP requests.

```ruby
require 'net/http'
```

Make a GET request:

```ruby
url = URI('https://example.com/')
Net::HTTP.get(url)
```

Make a `application/json` POST request:

```ruby
url = URI('https://example.com/')
data = JSON.generate(myhash)
Net::HTTP.post(url, data, { 'content-type': 'application/json' })
```
