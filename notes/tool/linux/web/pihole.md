---
title: Pi-hole
ref: https://pi-hole.net/
---

## With docker compose

`docker-compose.yml` ([pihole image](https://hub.docker.com/r/pihole/pihole/))

```yaml
services:
  pihole:
    image: pihole/pihole:latest
    restart: unless-stopped
  environment:
    DNSMASQ_LISTENING: all
  ports:
    - 53:53/tcp
    - 53:53/udp
    - 8573:80/tcp  # Web UI
  volumes:
    - pihole_config:/etc/pihole

volumes:
  pihole_config:
```

:::tip
In the `ports` section,
if you want to access the pi-hole from another container using the **host's IP address**,
you may need to use the `IPADDRESS:PORT:PORT` syntax. For example:

```yaml
ports:
  - 192.168.0.109:53:53/tcp
  - 192.168.0.109:53:53/ucp
```

Also update `~/.config/docker/daemon.json` to other containers use the new DNS server:

```json
{
    "dns": ["192.168.0.109"]
}
```

:::

After starting the container, get the web password with:

```shell
docker compose logs pihole | grep random
```
