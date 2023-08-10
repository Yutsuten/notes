---
title: Backup
ref: https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/
---

## Usage

Options to connect to a database (like `--port` or `--host`) can be used in addition to the options bellow.

### Dump

```shell
mongodump OPTIONS
```

| Option | Description |
| --- | --- |
| `-d` `--db` | Specifies a database to backup. |
| `-c` `--collection` | Specifies a collection to backup. |
| `-o` `--out` | Specifies the directory to write BSON files for the dumped databases (default: current directory). |

### Restore

Looks for a folder called 'dump', and inside it the name of the databases to be restored.

```shell
mongorestore OPTIONS
```

| Option | Description |
| --- | --- |
| `-d` `--db` | Specifies a database to restore. |
| `-c` `--collection` | Specifies a collection to restore. |
| `--dir` | Specifies the dump directory. |

### Export

```shell
mongoexport OPTIONS
```

| Option | Description |
| --- | --- |
| `-d` `--db` | Specifies a database to export. |
| `-c` `--collection` | Specifies a collection to export. |
| `-o` `--out` | Specifies the directory to write JSON files for the dumped databases (default: standard output). |
