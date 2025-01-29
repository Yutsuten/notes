---
title: Array
ref: https://docs.ruby-lang.org/en/3.4/Array.html
---

## Basic

```ruby
my_array = [1, 2, 3]
my_array = (1..10).to_a

my_array[1]
my_array.push(40)
my_array << 40  # Same as push

```

## Methods

| Method     | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `push`     | Appends each argument to the array.                               |
| `sort`     | Returns a new array sorted.                                       |
| `sort_by!` | Sort in place by using the given block.                           |
| `reverse`  | Returns a new array in inverse order.                             |
| `map`      | Returns a new array with each element updated by the given block. |
| `collect`  | Same as `map`.                                                    |

Update elements order:

```ruby
my_array.sort! do |v1, v2|
  v1 <=> v2
end
my_array = my_array.sort_by do |key, value|
  value
end
my_array.reverse!
```

Calculate the square of every element:

```ruby
my_nums.map { |num| num ** 2 }
my_nums.collect { |num| num ** 2 }
```
