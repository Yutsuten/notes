---
title: Webpack
ref: https://webpack.js.org/guides/installation/
---

## Install

```shell
yarn add webpack webpack-cli --dev
```

## Setup for Vue with bootstrap and js + css bundle

```shell
yarn add css-loader extract-loader file-loader mini-css-extract-plugin style-loader --dev
yarn add babel-polyfill bootstrap-vue vue
```

Edit `webpack.config.js`:

```javascript
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
```

### Javascript

```javascript
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './index.css'
import './assets/js'

Vue.use(BootstrapVue)
```

### CSS

```css
@import url('./assets/css/index.css');
```

### package.json

```json
{
  "scripts": {
    "build": "webpack"
  },
}
```

### Build / watch

```shell
yarn run build
npx webpack --watch
```
