---
title: Traceroute
man: traceroute
---

## Usage

```shell
traceroute OPTIONS HOST
```

| Option | Description |
| --- | --- |
| `-m` `--max-hops` | Specifies the maximum number of hops (max time-to-live value) traceroute will probe. The default is 30. |
| `-U` `--udp` | Use UDP to particular destination port for tracerouting (instead of increasing the port per each probe). Default port is 53 (dns). |
