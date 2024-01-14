---
title: Debian
---

## Apt

Check installed package version.

```shell
dpkg -s PACKAGE | grep Version
```

Check package (may not be installed).

```shell
apt show PACKAGE
```

Install package.

```shell
sudo apt install PACKAGE
```

Remove package / cleanup.

```shell
sudo apt remove PACKAGE
sudo apt autoclean && sudo apt autoremove
```
