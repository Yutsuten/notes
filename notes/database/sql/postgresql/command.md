---
title: Command
man: psql
ref: https://www.postgresql.org/docs/current/app-psql.html
---

## Usage

```shell
psql OPTIONS DBNAME
```

| Connection option | Description |
| --- | --- |
| `-d` `--dbname` | Specifies the name of the database to connect to. |
| `-h` `--host` | Connect to the PostgreSQL server on the given host. |
| `-p` `--port` | The TCP/IP port number to use for the connection. |
| `-U` `--username` | The PostgreSQL user name to use when connecting to the server. |
| `-w` `--no-password` | Never prompt for password. |
| `-W` `--password` | Force password prompt. |

| Option | Description |
| --- | --- |
| `-c` `--command` | Execute the given SQL query and exit. |

You may provide the password by prepending `PGPASSWORD` to the command.

```shell
env PGPASSWORD=password psql dbname
```
