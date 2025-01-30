---
title: Built-in
---

## Interactive Console

Run the command:

```shell
irb
```

## Functions

Simple printing:

```ruby
print 'Hello'  # Prints something and do NOT put a new line
puts 'Hello'   # Prints something and puts a new line at the end
```

[String formatting](https://docs.ruby-lang.org/en/3.4/format_specifications_rdoc.html):

```ruby
sprintf('%.1f', 8.199)
```

Getting user input:

```ruby
my_name = gets  # Gets the input from the user
my_name = gets.chomp  # Same as gets but removes the new line
```

## Comments

```ruby
# One line comment

=begin
I'm a comment!
I don't need any # symbols.
=end
```
