---
title: Volumes
ref: https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes
---

## Configuration

### Short syntax

The short syntax uses the generic `[SOURCE:]TARGET[:MODE]` format.

```yaml
services:
  app:
    volumes:
      - /code/node_modules       # Volume
      - data:/code/node_modules  # Named volume
      - .:/code                  # Bind mount
volumes:
  data:
```

When bind mounting,
the host path can be a

1. Full path
2. Relative path (must start with `./`)
3. User relative path (use `~/`)

As for the `MODE`,
it can be `ro` for read-only or `rw` for read-write (default).

## Usage

Bind mount a directory `~/code` and exclude `~/code/node_modules`.

```yaml
services:
  app:
    volumes:
      - ~/code:/code        # Bind mount
      - /code/node_modules  # Volume
```

The volume created "hides" from the bind mount the `node_modules` folder.

Be careful that if `/code/node_modules` doesn't exist in the image,
the directory will be created and owned by `root`.
Create it beforehand and `chown` it by a user if it is not desired.
