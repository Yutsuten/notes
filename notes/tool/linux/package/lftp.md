---
title: Lftp
man: lftp
---

## Usage

It opens a shell-like interactive command line.

```shell
lftp OPTIONS URL
```

| Option | Description |
| --- | --- |
| `-u` | Specify the user (and optionally a password, comma separated). |
| `-p` | Specify the port. |

| Target | URL syntax |
| --- | --- |
| FTP host | `ftp://host/path` |
| SFTP host | `sftp://host/path` |

After connecting to a remote server you have an interactive shell on the remote side.
It may be a little confusing as the "local" may feel like where you are now (the remote),
but that's not how it is.

- **local** is your local PC
- **remote** is the remote server.

## Navigating

Commands to navigate.

| Remote | Local | Description |
| --- | --- | --- |
| `cd` | `lcd` | Change the current directory. |
| `ls` `cls` | `!ls` | List directory. |

## Connecting

### Open

Open connection to a different remote than the one specified in the command line.

```shell
open OPTS URL
```

| Option | Description |
| --- | --- |
| `-u` | Specify the user (and optionally a password, comma separated). |
| `-p` | Specify the port. |

### User

Use specified info for remote login.
If password is not specified, it will ask.

```shell
user USER PASS
```

## Transferring files

### Get

Retrieve the remote file.
For wildcard expansion, use `mget`.

```shell
get FILES
mget FILES
```

| Option | Description |
| --- | --- |
| `-P` `--parallel` | Download N files in parallel. |

### Put

Upload file into remote.
For wildcard expansion, use `mput`.

```shell
put FILES
mput FILES
```

| Option | Description |
| --- | --- |
| `-P` `--parallel` | Download N files in parallel. |

### Mirror

Mirror specified source directory to the target directory.

```shell
mirror OPTIONS SOURCE TARGET
```

By default the source is **remote** and the target is a **local** directory (get).
When using `-R`, the source directory is **local** and the target is **remote** (put).

| Option | Description |
| --- | --- |
| `-R` `--reverse` | Reverse mirror (put files). |
| `-c` `--continue` | Continue a mirror job if possible. |
| `-e` `--delete` | Delete files not present at remote site. |
| `-r` `--no-recursion` | Don't go to subdirectories. |
| `-P` `--parallel` | Download N files in parallel. |
| `-i` `--include` | Include matching files (Regex). |
| `-I` `--include-glob` | Include matching files (Glob). |
| `-x` `--exclude` | Exclude matching files (Regex). |
| `-X` `--exclude-glob` | Exclude matching files (Glob). |
| `--only-missing` | Download only missing files. |
| `--delete-excluded` | Delete files excluded at the target. |
| `--include-glob-from` | Load include glob patterns from the file, one per line. |
| `--exclude-glob-from` | Load exclude glob patterns from the file, one per line. |

## Examples

Download musics from [www.vipvgm.net](https://www.vipvgm.net/):

```shell
mirror -erP 100 -I '*.m4a' --exclude-glob-from exclude.txt --only-missing --delete-excluded https://www.vipvgm.net/mu/
```

Sync files to Android through FTP or SFTP:

```shell
mirror --reverse --parallel=10 --ignore-time --delete --no-perms --verbose ~/Music/ ftp://android/sd-card/Music
mirror --reverse --ignore-time --delete --no-perms --verbose ~/Music/ sftp://android/storage/AAAA-BBBB/Music
```
