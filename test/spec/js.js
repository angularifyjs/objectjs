var path = require('path');
var ObjectJs = require(path.resolve('src', 'objectjs.js'));

describe("ObjectJs", function() {

  it('should init object A', function() {
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

    expect(A).toEqual(jasmine.objectContaining({
    	value: 0
    }));

    A.set(100);
    expect(A).toEqual(jasmine.objectContaining({
    	value: 100
    }));

    expect(A.get()).toEqual(100);
  });

  it('should extend object A', function() {
    A.extend({
      init: function() {
        this.value = 200;
      },

      get: function() {
        return 'value=' + this._super();
      },

      test: function() {
        return 'hello moto';
      }
    });

    expect(A).toEqual(jasmine.objectContaining({
    	value: 200
    }));

    expect(A.get()).toEqual('value=200');

    expect(A.test()).toEqual('hello moto');
  });

});