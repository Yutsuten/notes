---
title: Path manipulation
---

## Creating lines

### canvas-draw.js

```js
var path = new Path();
path.strokeColor = 'black';
path.strokeWidth = 2;
path.add(new Point(30, 75));
path.add(new Point(60, 75));
path.add(new Point(45, 40));

// Close path
path.closed = true;
path.fillColor = '#44DD33';
path.fillColor.alpha = 0.2;

// Insert into specific index
path.insert(1, new Point(15, 40));
```

### Get segment (node)

`canvas-draw.js`

```js
path.segments[index].point
```

### Removing paths

`canvas-draw.js`

```js
path.removeSegment(index);
path.removeSegments();
```

## Creating circles

`canvas-draw.js`

```js
var circle = new Path.Circle({
    center: new Point(50, 50),
    radius: 10,
    fillColor: 'black'
});
```
