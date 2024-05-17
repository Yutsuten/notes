---
title: Flow control
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
---

## Condition

See
[if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
documentation.

```js
if (10 < 20) {
  doSomething();
} else if (10 > 20) {
  doSomething();
} else {
  doSomething();
}
```

## For loop

See
[for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for),
[for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in),
[for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
documentation.

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Loop dict
const mydict = { a: 1, b: 2, c: 3 };
for (const key in mydict) {
    console.log(`${key}: ${mydict[key]}`);
}
// Loop list
for (const element of [3, 4, 5]) {
  console.log(element);
}
```

## While loop

See
[while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
documentation.

```js
let price = 5;
while (price < 100) {
    if (price == 13) {
        price += 8;
        continue;  // Skip to next interation
    }
    if (price == 50) {
        break;  // Finish the loop now
    }
    console.log(`I may buy it for \$${price}`);
    price += 8;
}
console.log(`\$${price} is too expensive!`);
```

## Do...while loop

See
[do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
documentation.

```js
let price = 5;
do {
    console.log(`I may buy it for \$${price}`);
    price += 8;
} while (price < 100);
console.log(`\$${price} is too expensive!`);
```

## Switch

See
[switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
documentation.

```js
switch (myExpr) {
  case '1':
    doSomething();
    break;
  case '2':
    doSomething();
    break;
  default:
    doSomething();
    break;
}
```

## Try...catch finally

See
[throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw),
[try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
documentation.

```js
try {
  throw new Error('Something is wrong!');
} catch (error) {
  console.log(error.message);
  if (error instanceof TypeError) {
    // Handle TypeError
  } else if (error instanceof RangeError) {
    // Handle RangeError
  } else if (error instanceof EvalError) {
    // Handle EvalError
  } else {
    throw error;
  }
} finally {
  // Will always run
}
