---
title: Nice
man: nice
ref: https://www.tecmint.com/set-linux-process-priority-using-nice-and-renice-commands/
---

## Overview

Run a program with modified scheduling priority.
Nice levels range from -20 (highest priority) to 19 (lowest priority).

- Without `nice` the default nice level is 0.
- With `nice` the default nice level is 10.
- Negative nice levels require elevated rights (sudo).

Check the nice level of a running process with `top` or `ps -eO ni`.

## Usage

```shell
nice OPTION COMMAND
```

| Option | Description |
| --- | --- |
| `-n` `--adjustment` | Add integer N to the niceness. |

### Example

Start process with nice level of 5:

```shell
nice -n 5 command
```

Start process with nice level of -5 (and still run it as a user):

```fish
sudo -E nice -n -5 sudo -Eu (whoami) command
```

## Changing the limit

If you do not want to use sudo everytime, edit `/etc/security/limits.conf`:

```ini
#<domain>      <type>  <item>         <value>
myuser          -       nice           -5
```
