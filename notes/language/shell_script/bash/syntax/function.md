---
title: Function
---

```bash
myfunc() {
    # Do something
}
```

## Allow calling function from script

```bash
## ...
## Functions definition
## ...

"$@"
```

### Usage

```bash
./myscript.sh myfunc param
```
