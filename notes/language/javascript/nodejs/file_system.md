---
title: File System
ref: https://nodejs.org/api/fs.html
---

## Usage

Enable interaction with the file system.

```javascript
const fs = require('node:fs'); // CommonJS
import fs from 'node:fs';      // ES module
```

Read all contents of a file as string:

```javascript
const contents = fs.readFileSync('path/to/file.txt', 'utf8');
```
