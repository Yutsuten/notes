---
title: Browserify
---

## Browserify + browserify-css + watchify + gulp setup

```shell
yarn add browserify --dev
yarn add browserify-css --dev
yarn add gulp --dev
yarn add gulplog --dev
yarn add vinyl-source-stream --dev
yarn add watchify --dev
```

Edit `package.json`:

```json
{
  "browserify": {
    "transform": [
      "browserify-css"
    ]
  },
  "browserify-css": {
    "autoInject": false,
    "minify": true,
    "output": "bundle.css"
  }
}
```

Edit `gulpfile.js`:

```js
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var log = require('gulplog');

var browserify = require('browserify');
var browserify_css = require('browserify-css');
var watchify = require('watchify');

var b = watchify(browserify({
  entries: 'index.js',
  cache: {},
  packageCache: {},
  debug: true
}));

gulp.task('default', bundle);
b.on('update', bundle);
b.on('log', log.info);

function bundle() {
  return b.bundle()
    .on('error', log.error.bind(log, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
}
```
