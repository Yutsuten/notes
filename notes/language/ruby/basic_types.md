---
title: Basic types
---

```ruby
my_name = "Taro"    # String
my_int = 10         # Integer
my_float = 3.14
my_bool = true
my_nil = nil
my_symbol = :hello  # Symbol

my_name.to_sym  # to symbol
my_name.intern  # to symbol
my_symbol.to_s  # to string

## Check if an object can receive a method
my_var.respond_to?(:next)

my_int.next  # Add 1 to an integer
my_int.to_s  # Convert to string

my_float.floor  # Round down

## Assign the result to the variable
my_name.capitalize!

## Methods that return boolean
string_to_check.include? "substring"
```
