---
title: Code snippets
---

## Shebang

```fish
#!/usr/bin/env fish
```

## Read yes or no from user

```fish
read --line --prompt-str 'Are you sure? [y/N] ' answer
if string match --quiet --regex '^[Yy]$' $answer
    echo 'Answer is yes'
else
    echo 'Answer is no'
end
```

## Rotate backups

It is considered that the backups have date in its name.

```fish
function trim_old_backup --argument-names keep_count
    set cur 0
    printf '%s\0' $argv[2..] | sort --zero-terminated --reverse | while read --null filename
        set cur (math $cur + 1)
        if test $cur -gt $keep_count
            rm -f $filename
        end
    end
end
```

To keep the last 7 backups of `*.bkp` files:

```fish
trim_old_backup 7 *.bkp
```

## Delete old command history

Add this to `config.fish` to clear history automatically.

```fish
set -g fish_history_max 1500

# Fish history cleanup
set remainder (math $fish_history_max - (count $history))
if test $remainder -lt 0
    for cmd in $history[-1..$remainder]
        history delete --exact --case-sensitive -- "$cmd"
    end
end
```
