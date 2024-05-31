---
title: BrowserContext
ref: https://playwright.dev/docs/api/class-browsercontext
---

## Cookies

Check if a login session is properly encrypted:

```js
let cookieCheckCount = 0;
const cookies = context.cookies();
for (const cookie of cookies) {
    if (cookie.name === 'session') {
        cookieCheckCount++;
        expect(cookie.value).toEqual(expect.stringMatching(/^[A-Za-z0-9_-]+$/));  // base64url
    }
}
expect(cookieCheckCount).toBe(1);
```
