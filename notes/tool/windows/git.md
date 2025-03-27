---
title: Git for Windows
ref: https://gitforwindows.org/
---

## File structure

While on Windows we technically don't have a root directory (`/`),
when using Git Bash, the root directory actually exists.

Keeping this in mind can help solving some issues.

## Troubleshooting

If getting `bash.exe: warning: could not find /tmp, please create!`,
open bash and run:

```shell
mkdir /tmp
```
