---
title: Loop
ref: https://fishshell.com/docs/current/tutorial.html#loops
---

## While syntax

```fish
while true
    echo "Loop forever"
end
```

## For syntax

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
