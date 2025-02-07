---
title: Net::HTTP
ref: https://docs.ruby-lang.org/en/3.4/Net/HTTP.html
---

## Usage

Library to make HTTP requests.

```ruby
require 'net/http'
```

## Request

Make a GET request:

```ruby
url = URI('https://example.com/')
Net::HTTP.get_response(url)
```

Make a `application/json` POST request:

```ruby
url = URI('https://example.com/')
data = JSON.generate(myhash)
Net::HTTP.post(url, data, { 'content-type': 'application/json' })
```

## Response

A [Net::HTTPResponse](https://docs.ruby-lang.org/en/3.4/Net/HTTPResponse.html)
object is returned.

```ruby
response = Net::HTTP.post(...)
puts response.code
if response.is_a?(Net::HTTPSuccess)
  puts response.body
end
```
