---
title: Hash
ref: https://docs.ruby-lang.org/en/3.4/Hash.html
---

## Basic

Create empty hash:

```ruby
my_hash = Hash.new
my_hash = {}
```

Create filled hash:

```ruby
my_hash = {
  'name' => 'Taro',
  'age' => 24
}
my_hash = {
  :name => 'Taro',
  :age => 24
}
my_hash = {
  name: 'Taro',  # Becomes symbol
  age: 24        # Becomes symbol
}
```

Access values of a hash:

```ruby
my_hash['id'] = 1
my_hash[:id] = 1
my_hash.delete(key)
```

## Methods

```ruby
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
