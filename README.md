objectjs [![Build Status](https://travis-ci.org/angularifyjs/objectjs.svg?branch=master)](https://travis-ci.org/angularifyjs/objectjs) [![Coverage Status](https://img.shields.io/coveralls/angularifyjs/objectjs.svg)](https://coveralls.io/r/angularifyjs/objectjs?branch=master)
===============

Extendable object in javascript


## Installing

```
npm install objectjs
```

## Using

```javascript
var ObjectJs = require('objectjs');

///////////////////////////////////////////////////
// Create object A
///////////////////////////////////////////////////
A = ObjectJs.extend({
  value: null,
  init: function() {
    this.value = 0;
  },
  get: function() {
    return this.value;
  },
  set: function(value) {
    this.value = value;
  }
});

// A.init will be called automatically
// A.value is equal 0
// A.get() will return 0
// if A.set(100) then A.value and A.get() will be equal 100

///////////////////////////////////////////////////
// Extend A object
///////////////////////////////////////////////////
A.extend({
  init: function() {
    this.value = 200;
  },
  get: function() {
    return 'value=' + this._super();
  },
  test: function(){
    return 'hello moto';
  }
});

// A.value is equal 200
// A.get() is equal `value=200`. `this._super` will refer to parent function which return `this.value`
// A.test() is equal `hello moto`

```

**Note:** 
- `this._super()` does not work in `async` because it will be cleared up at the end of the function. You may need to use `var _super = this._super` before call `async`. 
- You can extend many levels as you want. 
- Be careful with `this` object. Take advantage of the best practice below:


License
-------------
MIT - Copyright (c) 2014 Angularfiy.org & HenryTao.