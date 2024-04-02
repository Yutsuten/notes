---
title: Code snippets
---

## Delete old backups

It is considered that the backups have date in its name.

```fish
function trim_old_backup
    set keep_count $argv[1]
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
