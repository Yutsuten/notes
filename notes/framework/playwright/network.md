---
title: Network
ref: https://playwright.dev/docs/network#network-events
---

## Network monitoring

Check if response has the expected status code,
and count the number of responses.

```javascript
let responseCount = 0;
page.on('response', response => {
    if (response.url().endsWith('/api/users')) {
        expect(response.status()).toBe(200);
        responseCount++;
    }
});
expect(responseCount).toBe(1);
```
