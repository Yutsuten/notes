---
title: Sudo
ref: https://toroid.org/sudoers-syntax
---

## Usage

Run a single command as root.

```shell
sudo command
```

Change to root user.

```shell
sudo su -
sudo -Es
```

## Sudoers configuration

Start editing the sudoers file with `visudo`.

The last user specification match is applied to the sudo command.

| Syntax                                     | Explanation                                                 |
| ------------------------------------------ | ----------------------------------------------------------- |
| `%wheel ALL=(ALL) ALL`                     | Allow wheel members to run any command as any user          |
| `%wheel ALL=(root) NOPASSWD: /bin/program` | Allow wheel members to run program as root without password |

Enable password feedback
(if `Defaults` already has an entry,
use `,` to add more entries):

```txt
Defaults pwfeedback
```
