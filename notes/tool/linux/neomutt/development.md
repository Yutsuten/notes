---
title: Development
ref: https://neomutt.org/dev
---

## Build

For the most fast building, use:

```shell
./configure --disable-doc --disable-nls
```

To access Gmail and use headers cache, use:

```shell
./configure --disable-doc --disable-nls --gnutls --gdbm
```

Finally `make` the binary:

```shell
make
```

When changing compile options, cleaning may be needed:

```shell
make clean
```

## Run

If running with zero configuration,
make sure to create a [Local Account](/tool/linux/neomutt/configuration#local-account)
with some emails on it,
then run:

```shell
./neomutt -n -F /dev/null -f ~/.local/share/neomutt -e 'set folder = "~/.local/share/neomutt"'
```
