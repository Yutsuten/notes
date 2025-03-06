---
title: Typescript
ref: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
---

## Overview

TypeScript offers all of JavaScript’s features, and an additional layer on top of these:
TypeScript’s type system.

## Configuration

[Configuration](https://www.typescriptlang.org/tsconfig/) is done in `tsconfig.json`.

Usage of the `strict` compiler option is recommended to make typescript more
[sound](https://blog.logrocket.com/is-typescript-worth-it/).

Sample configuration:

```json
{
  "compilerOptions": {
    "module": "ES2020",
    "target": "ES2020",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "noUnusedLocals": true,
    "resolveJsonModule": true,
    "verbatimModuleSyntax": true,
    "jsx": "preserve",
    "lib": ["ES2020", "DOM", "DOM.Iterable"]
  },
  "include": [
    ".vitepress/**/*.ts",
    ".vitepress/**/*.vue",
    "shims.d.ts"
  ]
}
```

## Run type check

```shell
tsc --noEmit
```

## Types

### Primitives

- Any: `any`
- Number: `number` `bigint`
- String: `string`
- Boolean: `boolean`
- List: `Array` `[]`
- Dict: `Record<Type1, Type2>` `{}`
- Set: -
- Symbol: `symbol` [[1]](https://javascript.info/symbol)
- Function: `Function`
- Empty: `null` `undefined` `void` (function which returns `undefined` or has no return value)
- Unset: `unknown` (someone must declare its type)
- Never: `never`
- Union: `|`
- Class: -
- Final: -

Async functions don't have a primitive type.
Declare one with:

```ts
type AsyncFunction = () => Promise<any>;
```

To check the type, use `typeof`:

```ts
typeof n === 'number'
Array.isArray(a)
```

### Type from dict

Useful if you have an object and want to create a type from its keys.

```ts
const point = { x: 10, y: 20 };
type CoordXY = keyof typeof point;  // CoordXP = 'x' | 'y'
```

### Usage

For variables:

```ts
const hello: string = 'Hello World';
const value: number = 10;
const dict1: {[key: string]: string} = {};
const dict2: Record<string, string> = {};
const ids: number[] = [0, 1];
```

For functions:

```ts
function getAdminUser(): User {
  // Must return a value of type User
}
```

For classes:

```ts
class UserAccount {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const newuser: User = new UserAccount(1, 'Kai');
```

Expanding arguments:

```ts
function sum({ a, b }: {a: number, b: number} {
  return a + b;
}
```

### Custom types / interfaces

Decide which values are accepted:

```ts
type MyBool = true | false;
type WindowStates = 'open' | 'closed' | 'minimized';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

If the object is complex, an `interface` will be needed:

```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 0,
  name: 'Sora',
};
```

If the key can be a whole type, use:

```ts
interface Parameters {
  [key: string]: any;
}
```

Generic types (like `Array`):

```ts
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

Create generic types using `Type`:

```ts
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
declare const backpack: Backpack<string>;
const object = backpack.get();  // object is string
backpack.add('Notebook');       // Must pass a string as parameter
```

### Exporting/importing types

```ts
export type { User };
import type { User } from '../types/user';
```

## Operators

Non-null assertion operator: `!`

```ts
stringOrNull!.toLowerCase();
```

## Typings

- [Reference](https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module)

If any other file type other than `.ts` or `.tsx` is imported,
typescript does not recognize it.
Ex:

```ts
import styles from './styles.module.css';
```

To solve this, create a file `typings.d.ts` containing:

```js
declare module '*.module.css';
```

## Tips

### Object.keys

`Object.keys()` return value by default is `any`.
To change it to its keys instead, use:

```ts
(Object.keys(mydict) as Array<keyof typeof mydict>).filter(key => ...);
```

`key` will have the type of `keyof typeof mydict`.

### event.target

By default its type is a generic `HTMLElement` (don't have `value` property),
but usually we deal with `HTMLInputElement` (textfield, checkbox, etc).
For that we need to cast to our desired type.

```ts
(event.target as HTMLInputElement).value
```
