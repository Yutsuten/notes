---
title: Expressions
ref: https://regexr.com/
---

## Patterns

| Pattern | Description |
| ------- | ----------- |
| `a` | Match a |
| `\d` | Digit |
| `\D` | Non-Digit |
| `\w` | Alphanumeric character |
| `\W` | Non-Alphanumeric character |
| `\s` | Whitespace character |
| `\S` | Non-whitespace character |
| `.` | Any character |
| `^` | Start of the line |
| `$` | End of the line |
| `a*` | Zero or more repetitions of `a` |
| `a+` | One or more repetitions of `a` |
| `a?` | Optional contain `a` |
| `a{10}`  | 10 repetitions of `a` |
| `a{5,}` | More than 5 repetitions of `a` |
| `a{5,10}` | Between 5 and 10 repetitions of `a` |
| `[abc]` | Character set: `a`, `b` or `c` |
| `[^abc]` | Character set: Not `a`, `b` or `c` |
| `[a-z]` | Characters between a and z |
| `(cat\|dog)` | Capture group: `cat` or `dog` |
| `(\w+).png` | Capture the name of a png file |
