---
title: JSON
ref: https://docs.ruby-lang.org/en/3.4/JSON.html
---

## Usage

Library to generate or parse JSON.

```ruby
require 'json'
```

Ruby object to JSON:

```ruby
my_hash = {
  'name' => 'Taro',
  'age' => 24,
}
json_str = my_hash.to_json
json_str = JSON.generate(my_hash)
```

JSON to ruby object:

```ruby
my_hash = JSON.parse(json_str)
```
