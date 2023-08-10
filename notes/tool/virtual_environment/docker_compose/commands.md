---
title: Commands
ref: https://docs.docker.com/compose/gettingstarted/
---

```shell
docker-compose exec -T <service_name> command  # -T to disable tty allocation

docker-compose logs -f --tail 10 <service_name>

docker-compose up -d --force-recreate --no-deps <service_name>
docker-compose up -d  # Detached mode
docker-compose up -d --build  # Rebuild containers
docker-compose up -d <service_name>
```
