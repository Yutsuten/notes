---
title: Class
ref: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

## Basic

### ES6

```js
class MyCoolClass {
  constructor(param1, param2) {
    this.param1 = param1
    this.param2 = param2
  }

  publicFunction() {
    this._privateFunction(1, 1)
    console.log('Hello World!')
  }

  _privateFunction(a, b) {
    return a + b
  }
}

let instance = new MyCoolClass()
```

## Inheritance

### ES5

```js
// Superclass
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Superclass method
Hero.prototype.greet = function () {
  return this.name + ' says hello.';
}

// Subclass
function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

// Subclass
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Subclasses extend superclass
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

Warrior.prototype.attack = function () {
  return this.name + ' attacks with the ' + this.weapon + '.';
}

Healer.prototype.heal = function () {
  return this.name + ' casts ' + this.spell + '.';
}

// Initialize individual character instances
var hero1 = new Warrior('Bjorn', 1, 'axe');
var hero2 = new Healer('Kanin', 1, 'cure');
```
