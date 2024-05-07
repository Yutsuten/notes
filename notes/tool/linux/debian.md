---
title: Debian
---

## Apt

Install package:

```shell
sudo apt install PACKAGE
```

Remove package and perform cleanup:

```shell
sudo apt remove PACKAGE
sudo apt autoclean && sudo apt autoremove
```

Check package information (may not be installed):

```shell
apt show PACKAGE
```

## Dpkg

Check installed package version:

```shell
dpkg -s PACKAGE | grep Version
```

Install from file:

```shell
sudo dpkg -i package.deb
```
