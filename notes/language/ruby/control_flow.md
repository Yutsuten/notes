---
title: Control flow
ref: https://docs.ruby-lang.org/en/3.4/syntax/control_expressions_rdoc.html
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

## Loop

```ruby
loop do
  next if cond  # Same as continue, skip this iteration
  do_something
  break if cond
end
```

## For loop

```ruby
## Include last number
for num in 1..10
  puts num
end

## Exclude last number
for num in 1...10
  puts num
end
```

## While loop

```ruby
while cond
  do_something
end

until cond
  do_something
end
```

## Do while loop

`do` + `end` is the same as `{` + `}`.

```ruby
95.upto(100) do |num|
  puts num
end

95.downto(90) do |num|
  puts num
end

my_array.each do |item|
  do_something
end

10.times do
  do_something
end
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
