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

Make a `multipart/form-data` [POST request](https://docs.ruby-lang.org/en/3.4/Net/HTTP/Post.html)
with a file and a string,
sent as [a form](https://docs.ruby-lang.org/en/3.4/Net/HTTPHeader.html#method-i-set_form)
(there is no helper function):

```ruby
require 'stringio'

url = URI('https://example.com/api/storage')
req = Net::HTTP::Post.new(url)
req['Authorization'] = 'Use this for headers'
form_data = [
  ['file', StringIO.new("File Contents\n"), { filename: 'notes.txt' }] # Use File.open() for local file
  ['name', 'notes.txt']
]
req.set_form(form_data, 'multipart/form-data')
res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end
```

Make a [DELETE request](https://docs.ruby-lang.org/en/3.4/Net/HTTP/Delete.html)
(there is no helper function):

```ruby
url = URI('https://example.com/api/user/1')
req = Net::HTTP::Delete.new(url)
req['Authorization'] = 'Use this for headers'
res = Net::HTTP.start(url.hostname, url.port, use_ssl: url.scheme == 'https') do |http|
  http.request(req)
end
```

## Response

A [Net::HTTPResponse](https://docs.ruby-lang.org/en/3.4/Net/HTTPResponse.html)
object is returned.

```ruby
res = Net::HTTP.post(...)
puts res.code
if res.is_a?(Net::HTTPSuccess)
  puts res.body
end
```

Parse a body with JSON data:

```ruby
require 'json'

res = Net::HTTP.post(...)
res_json = JSON.parse(res.body)
```
