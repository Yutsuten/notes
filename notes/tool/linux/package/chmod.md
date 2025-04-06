---
title: Chmod
---

## Symbolic mode

In the symbolic mode,
you choose the target (see bellow),
the operator,
and what are the permissions you with to give (`rwx`).

```shell
chmod u=rwx file
chmod g+w file
chmod o-x file
```

| Repr | Target | Operator | Description |
| --- | --- | --- | --- |
| `u` | user/owner | `+` | Adds a permission to a file or directory |
| `g` | group | `-` | Removes the permission |
| `o` | other | `=` | Sets the permission and overrides the permissions set earlier. |
| `a` | all | | |

## Absolute (numeric) mode

```bash
chmod 755 some/path
```

| Number | Permission Type        | Symbol |
| ------ | ---------------------- | ------ |
| 0      | No Permission          | ---    |
| 1      | Execute                | --x    |
| 2      | Write                  | -w-    |
| 3      | Execute + Write        | -wx    |
| 4      | Read                   | r--    |
| 5      | Read + Execute         | r-x    |
| 6      | Read + Write           | rw-    |
| 7      | Read + Write + Execute | rwx    |
