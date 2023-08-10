---
title: Configuration
ref: https://docs.docker.com/network/proxy/
---

## Proxy

### For dockerd

This will be applied for docker itself (pulling images, etc).

Run `sudo systemctl edit docker`.
The file `/etc/systemd/system/docker.service.d/override.conf` will be edited.

```ini
[Service]
Environment="HTTP_PROXY=http://username:password@proxy.com:8080/" "HTTPS_PROXY=http://username:password@proxy.com:8080/" "NO_PROXY=localhost,127.0.0.1,192.168.1.1,::1,*.local"
```

Restart docker to apply the changes.

```shell
sudo systemctl restart docker
```

### For docker client

This will be applied for containers.
Edit the file `~/.docker/config.json`:

```json
{
 "proxies":
 {
   "default":
   {
     "httpProxy": "http://user:pass@127.0.0.1:3001",
     "httpsProxy": "http://user:pass@127.0.0.1:3001",
     "noProxy": "localhost,127.0.0.1,192.168.1.1,::1,*.local"
   }
 }
}
```
