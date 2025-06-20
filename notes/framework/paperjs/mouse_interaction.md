---
title: Mouse interaction
ref: http://paperjs.org/tutorials/interaction/creating-mouse-tools/#click-drag-release
---

#### canvas-draw.js

```javascript
var myPath;

function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = 'black';
}

function onMouseDrag(event) {
    myPath.add(event.point);
}

function onMouseUp(event) {
    var myCircle = new Path.Circle({
        center: event.point,
        radius: 10
    });
    myCircle.strokeColor = 'black';
    myCircle.fillColor = 'white';

    myCircle.onMouseEnter = function(event) {
        this.fillColor = 'red';
    }

    myCircle.onMouseLeave = function(event) {
        this.fillColor = 'white';
    }
}
```
