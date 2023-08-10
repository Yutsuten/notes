---
title: Script
ref: https://nextjs.org/docs/api-reference/next/script
---

## Usage

```js
import Script from 'next/script'
```

| Prop | Description |
| --- | --- |
| `src` | **[Required]** A path string specifying the URL of an external script. Not required if inline script is provided. |
| `strategy` | The loading strategy of the script. Values may be: `beforeInteractive` `afterInteractive` `lazyOnload` |
| `onLoad` | Execute code after it has loaded. |
| `onReady` | Execute code after the script's load event when it first loads and then after every subsequent component re-mount. |
| `onError` | Execute code if a script fails to load. |

## Examples

```html
<Script src="https://example.com/script.js" strategy="lazyOnload" />
```
