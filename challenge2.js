//Activity 1: Arithmetic Operators

/*
//task 1: add two number
function add(num1,num2){
    console.log(num1+num2);
}
add(3,7)

//Task 2: Subtract two number
function sub(num1,num2) {
    console.log(num1-num2);
}
sub(7,5)

//Task 3: Multiply two numbers
function multi(num1,num2) {
    console.log(num1*num2);
}
multi(4,7)

//Task 4: divide two number
function divide(num1,num2) {
    console.log(num1/num2);
}
divide(10,2)

//task 5: find reminder
function reminder(num1,num2) {
    console.log(num1%num2);
}
reminder(10,2);
*/

/*
//Activity 2: Assignment Operators

//Task 1: add number to varible
// let a=6;
// a+=4;
// console.log(a);

//Task 2: Subtract
// let a=10;
// a-=5;
// console.log(a);

*/

/*
//Activity 4:  Comparison Operators

//Task 1: compare two numbers with < and>
// function compare(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(compare(5, 1));

//Task 2: compre two num by using <= and >=
// function compare(num1, num2) {
// if (num1<=num2) {
//     console.log(`number 2 is bigger`);
// }else{
//     console.log(`number 1 is bigger`);
// }

// }
// compare(4,9)

//Task 3:  compare by using === and ==

// function compare(num1, num2) {
//   if (num1 === num2) {
//     console.log(`same type and equal`);
//     return;
//   }
//   if (num1 == num2) {
//     console.log(`equals but not same type`);
//   }
// }

// compare(3,3)

*/

/*
//Activity 4: logocal Operators

//task 1: use && to combine two conditions
// function logic(num1, num2) {
//     let a=0;
//   if (typeof num1 === typeof a && typeof num2===typeof a) {
//     console.log(num1+num2);
//   }else{
//     console.log("not a number");
//   }
// }
// logic(4,9)

//task 2: use || to combine two conditions
// function logic(num1, num2) {
//     let a=0;
//   if (typeof num1 === typeof a || typeof num2===a) {
//     let b=num1+num2;
//     console.log(b);
//   }else{
//     console.log("does not cintains any number");
//   }}
//   logic(2,"o")

//task 3: use ! to negate a condition
// function logic(num1) {
//     let a=0;
//   if (!num1) {
//     console.log("value is false");
//   }else{
//     console.log("value is true");
//   }}
  
//   logic(false)*/

// Activity 5: ternary operator to check +ve number

function ternary(num1) {
  return num1 > 0 ? "positive" : "negative";
}

console.log(ternary(-5));
