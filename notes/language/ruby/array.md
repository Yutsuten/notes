---
title: Array
ref: https://docs.ruby-lang.org/en/3.4/Array.html
---

## Basic

```ruby
my_array = Array.new
my_array = [1, 2, 3]
my_array = (1..10).to_a
my_words = %w[foo bar]  # %W if going to use string interpolation

my_array[1]
my_array.push(40)
my_array << 40  # Same as push
```

## Methods

| Method     | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `push`     | Appends each argument to the array.                               |
| `max`      | Returns the biggest element in the array.                         |
| `min`      | Returns the smallest element in the array                         |
| `include?` | Returns `true` if the array includes the specified element.       |
| `empty?`   | Returns `true` if the length of the array is 0.                   |
| `sort`     | Returns a new array sorted.                                       |
| `sort_by!` | Sort in place by using the given block.                           |
| `reverse`  | Returns a new array in inverse order.                             |
| `join`     | Return a string which is the concatenation of the elements.       |
| `each`     | Iterate over the elements of the array.                           |
| `map`      | Returns a new array with each element updated by the given block. |
| `collect`  | Same as `map`.                                                    |

Check if array includes an element:

```ruby
my_array.include? 'critical'
```

Iterate array elements:

```ruby
array.each do |element|
  puts element
end
```

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

Join elements using `\n`:

```ruby
my_array.join("\n")
```

Calculate the square of every element:

```ruby
my_nums.map { |num| num ** 2 }
my_nums.collect { |num| num ** 2 }
```
