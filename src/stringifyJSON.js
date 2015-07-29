// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  if (obj === null || obj === NaN) {
    return 'null';
  } else if (typeof obj === 'object') {
    var res = _.reduce(obj, function(acc, val, key) {
      val = stringifyJSON(val);
      if (Array.isArray(obj)) {
        return val === undefined ? acc.concat(null) : acc.concat(val);
      }
      return val === undefined ? acc : acc.concat('"' + key + '":' + val);
    }, []);
    return Array.isArray(obj) ? "[" + res + "]" : "{" + res + "}";
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' ) {
    return obj.toString();
  }  
};
