---
title: Logging
ref: https://docs.python.org/3/library/logging.html
---

## Stop propagation

- [Stackoverflow reference](https://stackoverflow.com/questions/11820338/replace-default-handler-of-python-logger)

If adding handlers for both `logging.getLogger()` and `logging.getLogger(name)`,
one may want to stop the propagation of the log to the root logger.

```py
custom_logger = logging.getLogger('custom')
custom_logger.propagate = False
```
