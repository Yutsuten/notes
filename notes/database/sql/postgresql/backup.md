---
title: Backup
ref: https://www.postgresql.org/docs/current/app-pgdump.html
---

## Syntax

Extract a PostgreSQL database into a script file or other archive file.

```shell
pg_dump CONNECTION_OPTIONS OPTIONS DBNAME
```

| Option | Description |
| --- | --- |
| `-a` `--data-only` | Dump only the data, not the schema (data definitions). |
| `-F` `--format` | Selects the format of the output. Any of `plain` (default) `custom` `directory` `tar` |

### Examples

Dump database into a plain-text file:

```shell
pg_dump dbname > backup.sql
```

Dump a database into a custom-format archive file:

```shell
pg_dump -Fc dbname > dbname.dump
```
