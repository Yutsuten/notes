---
title: Method
---

```ruby
## Simple case
def method_name
  do_something
end

method_name  # Call it

## With parameters
def method_name(param=5, *splat)
  # splat becomes an array
  do_something
  return something
end

method_name(10)
```
