// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, element) {
  var element = element || document.body;
  var res = _.contains(element.classList, className) ? [element] : [];
  return _.reduce(element.childNodes, function(acc, child) {
    return acc.concat(getElementsByClassName(className, child))
  }, res);
};
