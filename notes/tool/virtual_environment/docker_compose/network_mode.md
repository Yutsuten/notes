---
title: Network mode
ref: https://docs.docker.com/reference/compose-file/services/#network_mode
---

## Configuration

Available values:

- `bridge` (default)
- `host`
- `none`
- `service:[service name]`
- `container:[container name/id]`

```yaml
service:
  app:
    network_mode: "host"
```
