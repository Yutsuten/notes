---
title: Caddy
ref: https://caddyserver.com/docs/
---

## Serving static content

`/etc/caddy/Caddyfile`

```shell
http://localhost:80 {
    root * /usr/share/caddy
    file_server browse

    # Hide .html extension on the browser
    try_files {path}.html
}
```

## With docker compose

Example of reverse proxy from another container serving at `11000`.

`docker-compose.yml` ([caddy image](https://hub.docker.com/_/caddy))

```yaml
services:
  caddy:
    image: caddy:latest
    restart: unless-stopped
    ports:
      - 80:80
      - 443:443
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./letsencrypt/live/example.com:/etc/letsencrypt/live/example.com
      - caddy_data:/data
      - caddy_config:/config
    extra_hosts:
      - host.docker.internal:host-gateway

volumes:
  caddy_data:
  caddy_config:
```

`Caddyfile`

```shell
http://example.com:80 {
    reverse_proxy host.docker.internal:11000
}

https://example.com:443 {
    header Strict-Transport-Security max-age=31536000;
    reverse_proxy host.docker.internal:11000
    tls /etc/letsencrypt/live/example.com/fullchain.pem /etc/letsencrypt/live/example.com/privkey.pem
}
```
