---
title: Mock
ref: https://playwright.dev/docs/mock
---

## Examples

JSON response returning an empty array:

```javascript
await page.route('**/api/users', async (route) => {
    await route.fulfill({ json: [] });
});
```
