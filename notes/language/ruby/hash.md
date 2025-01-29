---
title: Hash
ref: https://docs.ruby-lang.org/en/3.4/Hash.html
---

## Basic

```ruby
my_hash = Hash.new
my_hash = Hash.new("default value")
my_hash["id"] = 1
my_hash.delete(key)

my_hash = {
  "name" => "Taro",
  "age" => 24
}
my_hash = {
  :name => "Taro",
  :age => 24
}
my_hash = {
  name: "Taro",
  age: 24
}

my_hash.select do |key, value|
  value > 10
end

my_hash.each do |key, value|
  do_something
end

my_hash.each_key do |key|
  do_something
end

my_hash.each_value do |value|
  do_something
end
```
