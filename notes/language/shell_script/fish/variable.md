---
title: Variable
ref: https://fishshell.com/docs/current/language.html#variable-expansion
---

## Single Value

Creating variables:

```fish
set var_name value
read my_name
```

Using variables:

```fish
echo $HOME
echo {$WORD}s
echo "$foo $bar"
```

Save the output of a command in a variable and use it later
(possibly several times to avoid running the command every time):

```fish
ps -ef | read --null ps_output
printf '%s' $ps_output | sed -nE 's#pattern#\1#p'
```

## Array

Creating an array:

```fish
set fruits banana orange melon
```

Fish uses base 1 for accessing values in a list.

```fish
echo $fruits[1]  # => banana
```

Print an array with every element quoted with `'`
(useful if we need to expand it inside `"` for another command):

```fish
echo "'$(string join "' '" $fruits)'" # => 'banana' 'orange' 'melon'
```

If outside double quotes, the same can achieved with:

```fish
echo \'$fruits\' # => 'banana' 'orange' 'melon'
```

The same syntax can be used to expand multiple arguments:

```fish
set options --arg=$fruits # => --arg=banana --arg=orange --arg=melon
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
export (xargs -L 1 <.env)
```

Or a more complex solution like:

```fish
export (grep -E '^[^#;].+=.*' .env | xargs -L 1)
```
