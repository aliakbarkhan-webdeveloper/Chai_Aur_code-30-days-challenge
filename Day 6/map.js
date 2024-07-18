//create an array with map in which each number is square

let arr = [3, 4, 5, 6, 7];
let newArr = [];
arr.map((e) => {
  newArr.push(e ** 2);
});

console.log(newArr);
