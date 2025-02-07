---
title: Built-in
---

## Usage

Usually it is expected to have the default tools and libraries.

```shell
pacman -S ruby-stdlib
```

Open the interactive console:

```shell
irb
```

## Variables

| Variable | Description                             |
| -------- | --------------------------------------- |
| `ENV`    | A hash containing the user environment. |

## Functions

Simple printing:

```ruby
print 'Hello'  # Prints something and do NOT put a new line
puts 'Hello'   # Prints something and puts a new line at the end
```

Getting user input:

```ruby
my_name = gets  # Gets the input from the user
my_name = gets.chomp  # Same as gets but removes the new line
```

Exit a ruby script with a specific status code:

```ruby
exit(0)
exit(1)
```

## Comments

```ruby
# One line comment

=begin
I'm a comment!
I don't need any # symbols.
=end
```
