let arr = [3, 6, 8, 9, 3];
let [index_0, index_1, index_2, index_3, index_4] = arr;

console.log(index_0, index_1);

//Task 4

function rest(a, b, c, d, e) {
  return a + b + c + d + e;
}

let result = rest(...arr);
console.log(result);
