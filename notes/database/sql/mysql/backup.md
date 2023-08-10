---
title: Backup
---

## Backup

```shell
mysqldump -u user -p mydb > ~/dump.sql
```

## Restore

```shell
mysql -u user -p mydb < ~/dump.sql
```
