---
title: Misc
---

## Generate random string

```shell
</dev/urandom tr -dc 'A-Za-z0-9!"#$%&'\''()*+,-./:;<=>?@[\]^_`{|}~' | head -c 16  ; echo
```

## Bulk copy with renaming

```shell
for file in ./*; do
  cp "${file##*/}" "/path/to/destination/m_${file##*/}"
done
```

### Load .bashrc when using .bash_profile

```shell
if [ -f ~/.bashrc ]; then
   source ~/.bashrc
fi
```
