---
title: Greetd
ref: https://wiki.archlinux.org/title/Greetd
---

## Usage

Add configuration to `/etc/greetd/config.toml`.
Example using `tuigreet`:

```toml
[terminal]
vt = 1

[default_session]
command = "tuigreet --time --time-format '%Y-%m-%d %H:%M' --remember --asterisks --cmd fish"
user = "greeter"
```

Then enable the service so it starts on boot.

```shell
systemctl enable greetd
```
