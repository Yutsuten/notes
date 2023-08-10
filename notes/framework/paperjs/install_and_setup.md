---
title: Install and setup
---

## Install

[Paper.js download](http://paperjs.org/download/)

## Setup

### index.html

```html
<head>
    <script type="text/javascript" src="paper-full.min.js">
    </script>
    <script type="text/paperscript" src="canvas-draw.js" canvas="drawArea">
    </script>
</head>
<body>
    <canvas id="drawArea" style="width: 600px; height: 480px;"></canvas>
</body>
```

### canvas-draw.js

```js
var myPath = new Path();
// Do something with the path
```
