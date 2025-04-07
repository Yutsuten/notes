---
title: Code snippets
---

## Printing stuff

Generate a random string:

```shell
tr -dc '!-~' </dev/urandom | head -c16; echo
```

Get exit code of a command:

```shell
some-command; echo "[Exit code $?]"
```

## Scripting

Bulk copy with renaming:

```shell
for file in ./*; do
  cp "${file##*/}" "/path/to/destination/m_${file##*/}"
done
```

## Bash profile

Load `.bashrc` when using `.bash_profile`:

```shell
if [ -f ~/.bashrc ]; then
  source ~/.bashrc
fi
```
