/*
//Activity 1: if-else Statement

//Task 1: check a number is positive negative or zero;

// function numCheck(num) {
//   if (num > 0) {
//     console.log("number is positive");
//   } else if (num < 0) {
//     console.log("number is negative");
//   } else {
//     console.log("number is neutral");
//   }
// }

// numCheck(0);

//task 2: check a person is eligible for vote, age>=18
// function vote(age) {
//   if (age >= 18) {
//     console.log("voter is eligible for voting");
//   } else {
//     console.log("voter is under 18 and cannot cast vote");
//   }
// }
// vote(18);*/

/*
//Activity 2: Nested ifElse

//task 1: find the largest number among three numbers
function bigNum(num1, num2, num3) {
  if (num1 > num2) {
    if (num3 > num1) {
      console.log(`number ${num3} is greater`);
    } else {
      console.log(`number ${num1} is greater`);
    }
  } else {
    if (num3 > num2) {
        console.log(`number ${num3} is greater`);
      } else {
        console.log(`number ${num2} is greater`);
      }
  }
}
bigNum(15, 29, 7);
*/

//Activity 3: Switch Case

//Task 1: determine the day if the week

// let day = "wednesday";
// switch (day) {
//   case "monday":
//     console.log("today is monday");
//     break;

//   case "tuesday":
//     console.log("today is tuesday");
//     break;
//   case "wednesday":
//     console.log("today is wednesday");
//     break;
//   case "thursday":
//     console.log("today thursday");
//     break;
//   case "friday":
//     console.log("today is friday");
//     break;
//   case "saturday":
//     console.log("today is saturday");
//     break;
//   case "sunday":
//     console.log("today is sunday");
//     break;
//   default:
//     console.log("please choose the Right day");
//     break;
// }

//Task 2: Grade System based of score
// let score = 1;
// let A = score >= 90 && score <= 100;
// let B = score >= 75 && score <= 89;
// let C = score <= 74 && score >= 60;
// let D = score >= 50 && score <= 59;
// let F = score <= 49;
// switch (score) {
//   case A:
//     console.log("A grade");
//     break;
//   case B:
//     console.log("B grade");
//     break;
//   case C:
//     console.log("C grade");
//     break;
//   case D:
//     console.log("D");
//     break;
//   case F:
//     console.log("bsdk PUBG band krdy");
//     break;
//   default:
//     console.log("choose less of equal to 100");
//     break;
// }

//Activity 4: ternary operator

//Task: even of odd                        if num%2=0 then it is false bcz false=o , if result 1 then it is means it is true bcz true=1
let num = 7;
num % 2 ? console.log("odd") : console.log("even");
