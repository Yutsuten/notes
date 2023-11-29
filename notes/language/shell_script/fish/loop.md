---
title: Loop
ref: https://fishshell.com/docs/current/tutorial.html#loops
---

## Syntax

### While

```fish
while true
    echo "Loop forever"
end
```

### For

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

## Usage

Read file line by line in loop:

```fish
while read --line keyvalue
  export $keyvalue
end < ~/.local/environment
```
