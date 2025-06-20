---
title: Locator
ref: https://playwright.dev/docs/api/class-locator
---

## Examples

Simplest case, always prefer `getByRole`:

```javascript
await page.getByRole('button', { name: 'Submit' }).click();
```

Get parent container:

```javascript
const parent = await page.getByText('Welcome', { exact: true }).locator('..');
```

Get specific row of table and check its checkbox:

```javascript
await page.getByRole('row').filter({ hasText: 'example.com' }).getByRole('checkbox').check();
```

Fill a textbox:

```javascript
await page.getByRole('textbox', { name: 'username' }).fill('testuser01');
```
