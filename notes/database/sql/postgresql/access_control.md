---
title: Access Control
---

## Create user

```sql
CREATE USER myuser WITH PASSWORD 'myuser_pass';
```

## Permissions

```sql
GRANT ALL PRIVILEGES ON DATABASE dbname TO myuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO myuser;

GRANT SELECT ON public.users TO myuser;

REVOKE ALL PRIVILEGES ON DATABASE dbname FROM myuser;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM myuser;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM myuser;
```
