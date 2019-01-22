function sum() {
  var retval = 0;
  for (var i = 0, len = arguments.length; i < len; ++i) {
    retval += arguments[i];
  }
  return retval;
}

let a = [1, 2, 3];

console.log(sum.apply(this, a));
