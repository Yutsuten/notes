---
title: Blocks
---

## Yield

```ruby
def method_name
  do_something
  yield
  do_something
end

method_name { puts "Runs on yield keyword" }

## With parameters
def method_name(name)
  do_something
  yield('Taro')
  yield(name)
  do_something
end

method_name { |n| puts "Hello #{n}" }
```

## Proc

The proc does not check the number of arguments passed to it,
and when it returns, it does so for the calling method.
It is like if the source code has been inserted into the caller.

```ruby
say_hello = Proc.new { |n| puts "Hello #{n}" }
method_name &say_hello
say_hello.call

method_name &:to_i  # to_i becomes a block
```

## Lambda

The lambda checks the number of arguments passed to it (it will throw an error if
we do not pass).
And when it returns, it goes back to the calling method and continues.
It is like if we called a function.

```ruby
say_hello = lambda { |n| puts "Hello #{n}" }
```
