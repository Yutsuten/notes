---
title: User
---

## User management

To add user:

```shell
useradd OPTIONS USERNAME
```

| Option | Description |
| --- | --- |
| `-m` | Create home folder |
| `-p` | Set password (inline) |
| `-G g1,g2` | Add user to groups |

To delete user:

```shell
userdel -r USERNAME
```

To edit user:

```shell
chfn USERNAME        # Change finger information
passwd USERNAME      # Update password
passwd -d USERNAME   # Delete password
usermod -u 1001 USERNAME  # Update UID
```

Check user UID:

```shell
id -u USERNAME
```

To list existing users in the system:

```shell
cat /etc/passwd
```

### Groups

To list existing groups in the system:

```shell
getent group
```

List groups of a user:

```shell
groups USERNAME
```

Manage groups:

```shell
gpasswd OPTIONS USERNAME GROUP
```

| Option | Description |
| --- | --- |
| `-a` | Add to group. |
| `-d` | Remove from group. |

Update GID:

```shell
groupmod -g 1001 GROUPNAME
```

Check group GID:

```shell
id -g GROUPNAME
```

Delete group:

```shell
groupdel GROUPNAME
```

### Giving admin privileges

Run `visudo` and edit the desired privileges:

```shell
username ALL=(ALL) ALL  # Only for user
%wheel ALL=(ALL) ALL    # For all users in wheel group
```
