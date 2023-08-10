---
title: Restore
ref: https://www.postgresql.org/docs/current/app-pgrestore.html
---

## Syntax

Restore a PostgreSQL database from an archive file created by `pg_dump`.

```shell
pg_restore CONNECTION_OPTIONS OPTIONS DUMPFILE
```

- If a database isn't specified, a SQL file will be generated;
- If a `DUMPFILE` isn't specified, stdin will be used.

| Option | Description |
| --- | --- |
| `-a` `--data-only` | Restore only the data, not the schema (data definitions). |
| `-d` `--dbname` | Connect to the specified database and restore directly into it. |

### Examples

If the backup is in plain-text (SQL) format, use `psql` to restore:

```shell
env PGPASSWORD=password psql dbname < backup.sql
```

Restore into an existing database from a non-plain-text dump file:

```shell
pg_restore -d dbname dbname.dump
```
