---
title: Array
---

```ruby
my_array = [1, 2, 3]
my_array = (1..10).to_a

my_array[1]
my_array.push(40)
my_array << 40  # Same as push

my_array.sort! do |v1, v2|
  v1 <=> v2
end
my_array = my_array.sort_by do |key, value|
  value
end
my_array.reverse!

## Map
my_nums.map { |num| num ** 2 }
my_nums.collect { |num| num ** 2 }
```
