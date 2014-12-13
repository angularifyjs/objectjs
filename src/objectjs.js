var util = {
  isArray: function(value) {
    return value && typeof value === 'object' && typeof value.length === 'number';
  },
  isFunction: function(value) {
    return typeof value === 'function';
  },
  isObject: function(value) {
    return !!(value && typeof value === 'object' && !util.isArray(value));
  }
};

var ObjectJs = {
  extend: function(obj) {
    // verify obj
    obj = util.isObject(obj) ? obj : {};

    // wrapper function
    for (var key in obj) {
      if (util.isFunction(obj[key])) {
        (function(value) {
          obj[key] = function() {
            return value.apply(obj, arguments);
          };
        }(obj[key]));
      }
    }

    // check init function to return public attributes and methods
    if (util.isFunction(obj.init)) {
      obj.init();
    }

    // extend
    obj.extend = function(extObj) {
      for (var key in extObj) {
        var value = extObj[key];
        if (!obj[key]) {
          obj[key] = (function(value) {
            return function() {
              return value.apply(obj, arguments)
            };
          }(value));
        } else {
          obj[key] = (function(newValue, oldValue) {
            return function() {
              obj._super = oldValue;
              var res = newValue.apply(obj, arguments);
              obj._super = null;
              return res;
            };
          }(value, obj[key]));
        }
      };

      // check init function to return public attributes and methods
      if (util.isFunction(obj.init)) {
        obj.init();
      }
      return obj;
    };

    // return obj
    return obj;
  }
};

module.exports = ObjectJs;