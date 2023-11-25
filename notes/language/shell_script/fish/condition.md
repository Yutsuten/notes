---
title: Condition
ref: https://fishshell.com/docs/current/tutorial.html#conditionals-if-else-switch
---

## If syntax

`[[ ]]` does not exist.
`[ ]` exist but prefer `test` instead.

```fish
if grep fish /etc/shells
    echo Found fish
else if test $number -gt 5 || test $argv[1] = '-c'
    echo Complex condition
else
    echo Got nothing
end
```

To check if directory is empty or not
([reference](https://fishshell.com/docs/current/language.html#expand-command-substitution)):

```fish
if test -n "$(find $DIR -maxdepth 0 -empty)"
    echo "$DIR is empty!"
end
```

## Switch syntax

```fish
switch (uname)
    case Linux
        echo Hi Tux!
    case Darwin
        echo Hi Hexley!
    case FreeBSD NetBSD DragonFly
        echo Hi Beastie!
    case '*'
        echo Hi, stranger!
end
```
