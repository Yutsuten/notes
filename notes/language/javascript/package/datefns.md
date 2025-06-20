---
title: Date-fns
ref: https://date-fns.org/docs/Getting-Started
---

## Usage

```javascript
import { addDays, subDays, format } from 'date-fns';

const now = new Date();
const tomorrow  = addDays(now, 1)
const yesterday = subDays(now, 1)
const display   = format(now, 'yyyy-MM-dd HH:mm:ss')
```
