---
title: Variable
ref: https://fishshell.com/docs/current/language.html#variable-expansion
---

## Single Value

### Basic variable usage

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

### Compare datetime

To easily compare date and time in `fish`,
we remove `/` and `:` to make them become numbers,
and then use `test` to compare.

```fish
function check_time --argument-names now # now is in format HH:MM
    set now (echo "$now" | tr -d :)
    if test "$now" -lt 0600
        echo 'You should be sleeping now!'
    else if test "$now" -lt 1200
        echo 'Good morning!'
    else if test "$now" -lt 1800
        echo 'Good day!'
    else
        echo 'Good night!'
    end
end
```

### Save command output

Save the output of a command in a variable and use it later
(possibly several times to avoid running the command every time):

```fish
ps -ef | read --null ps_output
printf '%s' $ps_output | sed -nE 's#pattern#\1#p'
```

## Array

### Basic array usage

Creating an array:

```fish
set fruits banana orange melon
```

Fish uses base 1 for accessing values in a list.

```fish
echo $fruits[1]  # => banana
```

### Escape and expand arrays

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

### Integrate arrays with commands

Output of commands can be splitted on *newlines* if using **command substitution**:

```fish
set lines (cmd)
```

To pipe an array to a command, make each element be in one line:

```fish
string join \n $fruits | cmd
printf '%s\n' $fruits | cmd
```

With this we can, for example, sort the elements of an array:

```fish
set fruits (string join \n $fruits | sort)
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
