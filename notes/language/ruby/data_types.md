---
title: Data types
---

## Types

```ruby
my_name = 'Taro'    # String
my_int = 10         # Integer
my_float = 3.14
my_bool = true
my_nil = nil
my_symbol = :hello  # Symbol
```

Check the type of a variable:

```ruby
my_var.class
```

## Type conversion

To convert between types:

```ruby
my_name.to_sym  # to symbol
my_name.intern  # to symbol
my_symbol.to_s  # to string
my_str.to_f     # to float
```

## Common methods

Check if an object can receive a method:

```ruby
my_var.respond_to?(:next)
```

Assign the result to the variable by using `!`:

```ruby
my_name.capitalize!
```

Methods that return boolean use `?`:

```ruby
string_to_check.include? 'substring'
```
