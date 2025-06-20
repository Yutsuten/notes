---
title: Eslint
ref: https://eslint.org/docs/rules/
---

## Install

```bash
sudo pacman -S eslint
```

## Usage

### Naming / path

| Home | Parent |
| ---- | ------ |
| `~/.eslintrc.json` | `.eslintrc.json` |

### Command

```bash
eslint --init
```

### Sample

```json
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```

### Inline usage

```javascript
// Disable lint in a single line
var a = 3; // eslint-disable-line no-unused-vars

// Disable block
/* eslint-disable rule-name */
var a = 3;
/* eslint-enable rule-name */
```
