---
title: Logging
ref: https://docs.docker.com/compose/compose-file/compose-file-v3/#logging
---

## Configuration

Use the `logging` entry for log configuration inside `docker-compose.yml`.

```yml
logging:
  driver: syslog
  options:
    tag: "app_service"
```

For more information about available drivers and options,
see `docker > logging`.
