---
title: Sshfs
---

## Usage

Mount remote linux as readonly:

```shell
sshfs user@host:/home/user /media/sshfs/somehost -o nodev,nosuid,noexec,idmap=user,ro,reconnect
fusermount3 -u /media/sshfs/somehost
```

Mount android file system using port 2222 and applying mask:

```shell
sshfs user@host: /media/sshfs/android -p 2222 -o nodev,nosuid,noexec,idmap=user,reconnect,umask=137
fusermount3 -u /media/sshfs/android
```

| Mask value | Allowed permissions |
| :---: | :---: |
| 0 | `rwx` |
| 1 | `rw-` |
| 2 | `r-x` |
| 3 | `r--` |
| 4 | `-wx` |
| 5 | `-w-` |
| 6 | `--x` |
| 7 | `---` |
