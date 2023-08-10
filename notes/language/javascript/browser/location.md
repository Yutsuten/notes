---
title: Location
ref: https://developer.mozilla.org/en-US/docs/Web/API/Location
---

## Redirect

```js
location.replace('/')
```

## Reload

```js
location.reload();      // By default it reloads from cache
location.reload(true);  // Force a new request to the server
```

## Search Parameters

### With no dependencies

This will not work on complex queries.
Add this:

```js
var searchQuery = {
    toObject: function(search) {
        var params = {};
        if (search.length > 0) {
            search.substr(1).split('&').forEach(pair => {
                [key, value] = pair.split('=');
                params[key] = value;
            });
        }
        return params;
    },
    toString: function(queryObject) {
        params = [];
        for (var key in queryObject) {
            if (queryObject.hasOwnProperty(key) && queryObject[key]) {
                params.push(key + '=' + queryObject[key]);
            }
        }
        if (params.length > 0) {
            return '?' + params.join('&');
        }
        return '';
    }
}
```

And use like this:

```js
var query = searchQuery.toObject(location.search);
query.hello = 'world';
location.search = searchQuery.toString(query);
```

### With dependency

The package [query-string](https://github.com/sindresorhus/query-string)
was created to do this job.

```shell
yarn add query-string
```

Usage:

```js
const queryString = require('query-string');

var query = queryString.parse(location.search);
query.rows = 10;
location.search = queryString.stringify(query);
```
