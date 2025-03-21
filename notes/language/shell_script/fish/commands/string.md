---
title: String
ref: https://fishshell.com/docs/current/cmds/string.html
---

## Usage

```fish
string OPERATION OPTIONS
```

### Split

Lines of a file into a list.

```fish
set lines (string split \n <file)
```

Split comma separated values.

```fish
set value (string split , $line)
```

### Trim

Removes leading and trailing whitespace.

```fish
set trimmed_variable (string trim $variable)
```

### Match

Match using regex (similar to grep).

```fish
string match -qr 'ERROR|CRITICAL'
```

### Capitalize

```fish
set word hello
echo (string sub -l 1 -- $word | string upper)(string sub -s 2 -- $word)
```
