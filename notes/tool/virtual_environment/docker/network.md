---
title: Network
ref: https://docs.docker.com/network/
---

## Usage

When access to another containers is required,
it is better to create a custom network.

The main advantage is that containers can not only communicate by IP address,
but can also resolve a container name to an IP address.

```shell
docker network COMMAND
```

| Command | Description |
| --- | --- |
| `connect` | Connect a container to a network. |
| `create` | Create a network. |
| `ls` | List networks. |
| `rm` | Remove one or more networks. |
| `prune` | Remove all unused networks. |

### Available drivers

| Driver | Description |
| --- | --- |
| `bridge` | Default driver. Used when your applications run in standalone containers that need to communicate. |
| `host` | Remove network isolation between the container and the Docker host, and use the host’s networking directly. |
| `overlay` | Connect multiple Docker daemons together and enable swarm services to communicate with each other. |
| `macvlan` | Allow you to assign a MAC address to a container, making it appear as a physical device on your network. |
| `none` | Disable all networking. |

## Example

```shell
docker network create --driver bridge test-net
docker network rm test-net
```
