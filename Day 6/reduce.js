//sum of all numbers

let arr = [1, 2, 3, 4, 5, 6];
let sum = arr.reduce((acc, next) => {
  return next + acc;
}, 0);
console.log(sum);
