---
title: String
ref: https://docs.ruby-lang.org/en/3.4/String.html
---

## Basic

To make strings immutable (recommended),
add this the first line of the script:

```ruby
# frozen_string_literal: true
```

Instantiation:

```ruby
my_string = 'Taro'
interpolation = "Hello, #{name}"
concatenation = 'Hello ' + 'World'
my_string << 'concatenate me'
```

To escape `#` within a double-quoted string:

```ruby
text = "Your ID is \##{user_id}"
```

[String formatting](https://docs.ruby-lang.org/en/3.4/format_specifications_rdoc.html):

```ruby
format('%.1f', 8.199)  # Preferred
sprintf('%.1f', 8.199)
```

### Methods

| Method       | Description                                        |
| ------------ | -------------------------------------------------- |
| `length`     | Get the length of string.                          |
| `empty?`     | Returns `true` if string is empty.                 |
| `reverse`    | Reverse order of characters.                       |
| `upcase`     | Change all characters to upper case.               |
| `downcase`   | Change all characters to lower case.               |
| `capitalize` | Capitalize Every Word This Way.                    |
| `gsub`       | Global substitution.                               |
| `include?`   | Returns `true` if string includes substring.       |
| `split`      | Split string by the specified separator.           |
| `strip`      | Remove leading and trailing whitespace.            |

Replace all `s` with `th`:

```ruby
my_string.gsub(/s/, 'th')
```

Check if string includes substring:

```ruby
my_string.include? 'substring'
```

Split string by space (default):

```ruby
words_array = my_string.split(' ')
```
