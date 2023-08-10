---
title: Setup
---

Root access is required for the following steps.

## Available shells

First check the available shells in `/etc/shells`.
If the desired shell is not on the list (installed it using linuxbrew, for example),
you may manually edit the file.

```txt
/bin/sh
/bin/bash
/usr/bin/git-shell
/bin/zsh
/usr/bin/zsh
/home/linuxbrew/.linuxbrew/bin/zsh
```

## Set default shell

Then change the default shell of your user with the following command:

```shell
usermod -s /home/linuxbrew/.linuxbrew/bin/zsh mateus
```

You can check the change by seeing `/etc/passwd`.

The next login you will be using the new shell.
