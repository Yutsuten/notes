---
title: Time
ref: https://docs.ruby-lang.org/en/3.4/Time.html
---

## Basic

```ruby
now = Time.now
```

Get a string representation of a date in the specified format.
Check [here](https://docs.ruby-lang.org/en/3.4/strftime_formatting_rdoc.html)
for all the formatting options.

```ruby
now.strftime('%Y-%m-%d %H:%M:%S')
```
