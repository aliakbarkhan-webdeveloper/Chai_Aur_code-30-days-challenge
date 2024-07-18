
function highorder(fn1, fn2, val) {
  let result = fn1(val);
  return fn2(result);
}

function fn1(val) {
  return val ** 2;
}

function fn2(fn1) {
  return fn1 / 2;
}

console.log(highorder(fn1, fn2, 5));
