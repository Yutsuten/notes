---
title: Ssh
man: ssh
---

## Usage

```shell
ssh OPTIONS host COMMAND
```

| Option | Description |
| --- | --- |
| `-i` | Specify an identity file. |
| `-t` | Open a tty even with there are COMMANDs. |
| `-X` `-Y` | Enable trusted X11 forwarding. |
| `-o` | Allow specifying options in the configuration file format. |
| `-f` | Go to background just before command execution. |
| `-N` | Do not execute a remote command. This is useful for just forwarding ports. |
| `-T` | Disable pseudo-terminal allocation. |
| `-M` | Places the ssh client into "master" mode for connection sharing. |
| `-S` | Specifies the location of a control socket for connection sharing. |

| Config Option | Values | Description |
| --- | --- | --- |
| `StrictHostKeyChecking` | `yes/accept-new/no/ask` | Verify host fingerprint. |

### X11 forwarding

Step servers does not need any packages to be installed.
The destination server needs a X11 package, as follows:

| Distro | Package |
| --- | --- |
| Ubuntu 20.04 | `dbus-x11` |
| CentOS 8 | `xorg-x11-xauth` |

### Port forward

When forwarding ports,
keep in mind that a tunnel is created between the local (current) machine and the remote machine.

#### Local port forwarding

Forward requests from `local:123` to `A:456`.
(`local:123` → `A:456`)

```shell
ssh -L 123:localhost:456 A
```

#### Remote port forwarding

Forward requests from `B:456` to `local:123`.
(`local:123` ← `B:456`)

```shell
ssh -R 456:localhost:123 B
```

#### Dynamic forwarding

Creates a SOCKS server that will forward connections through it.
Use as a proxy server.

```shell
ssh -D 1080 A
```

## Example

Port-forward a SSH connection in the background:

```shell
ssh -fNTMS my-socket -D 1070 dest
ssh -S my-socket -O check dest
ssh -S my-socket -O exit dest
```
