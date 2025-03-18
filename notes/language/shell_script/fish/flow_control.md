---
title: Flow control
ref: https://fishshell.com/docs/current/tutorial.html#conditionals-if-else-switch
man: test
---

## Condition

`[[ ]]` does not exist.
`[ ]` exist but `test` is preferred.

```fish
if not grep fish /etc/shells
    echo 'No fish'
else if test $number -gt 5 -o $argv[1] = 'string is equal'
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

## For loop

Loop files:

```fish
for file in *.txt
    cp $file $file.bak
end
```

Loop list of numbers:

```fish
for x in (seq 5)
    touch file_$x.txt
end
```

Break:

```fish
for var in a b c
    if break_from_loop
        break
    end
end
```

## While loop

```fish
while true
    echo 'Loop forever'
end
```

Read file line by line in loop:

```fish
while read --line keyvalue
    export $keyvalue
end <~/.local/environment
```

## Switch

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
