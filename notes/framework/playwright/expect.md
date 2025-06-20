---
title: Expect
ref: https://playwright.dev/docs/api/class-locatorassertions
---

## Examples

Check if element exist (or not):

```javascript
await expect(locator).toHaveCount(1); // YES exist
await expect(locator).toHaveCount(0); // NO don't exist
```

Using regex:

```javascript
await expect(locator).toHaveText(/There are \d+ unread messages./u);
```

Take screenshot and expect it to be always the same:

```javascript
await expect(page).toHaveScreenshot('home-screen.png');
```
