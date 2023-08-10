---
title: Threading
---

```python
import threading

my_thread = threading.Thread(target=my_method, args=(1, 2))
my_thread.start()  # Start thread
my_thread.join()   # Wait thread to finish
```
