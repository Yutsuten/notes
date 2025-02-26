---
title: Variable
ref: https://fishshell.com/docs/current/language.html#variable-expansion
---

## Single Value

Creating variables

```fish
set var_name value
read my_name
```

Using variables

```fish
echo $HOME
echo {$WORD}s
echo "$foo and $bar"
```

## Array

```fish
set mylist banana orange melon
```

Fish uses base 1 for accessing values in a list.

```fish
echo $mylist[1]  # => banana
```

One way to print an array with every element quoted using `'`
(useful if we need to expand it inside `"` for another command):

```fish
echo "'$(string join "' '" $mylist)'"
```

## Special variables

| Bash | Fish | Description |
| --- | --- | --- |
| `$0` | `status filename` | Filename of current script. |
| `$*` `$@` `$1` | `$argv` | Script or function arguments. |
| `$#` | `count $argv` | Number of arguments. |
| `$?` | `$status` | Return code of last command. |
| `$!` | `$last_pid` | PID of last program run in background. |
| `$$` | `$fish_pid` | Current fish PID. |
| `$-` | `status is-interactive` `status is-login` | Check shell interactivity. |

## Load environment file

Considering `.env` an environment file
(with `KEY=VALUE` tuples),
one can export those variables in fish using:

```fish
export (xargs -L 1 < .env)
```

Or a more complex solution like:

```fish
export (grep -E '^[^#;].+=.*' .env | xargs -L 1)
```
