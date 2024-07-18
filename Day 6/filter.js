// make new array which contains only even numbers
let arr=[2,4,2,5,4,342,3,245,54,6,3,7,9,1];
let evenArr=[];
arr.filter((e)=>{e%2===0?evenArr.push(e):null})
console.log(evenArr);