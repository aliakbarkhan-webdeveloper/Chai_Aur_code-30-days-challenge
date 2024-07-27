//task 6
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 6, 7, 8, 9, 10];
console.log(newArr);

//Task 7
function rest(...numbers) {
  let arr = [...numbers];
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

let result = rest(...newArr);
console.log(result);
