---
title: Control flow
---

## Condition

```ruby
if cond1
  do_something
elsif cond2
  do_something
else
  do_something
end

unless cond1
  do_something
else
  do_something
end

do_something if cond
do_something unless cond

cond ? was_true : was_false
```

## Switch

```ruby
case my_var
  when 0
    do_something
  when 1
    do_something
  else
    do_something
end
```
