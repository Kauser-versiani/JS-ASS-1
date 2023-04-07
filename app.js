// No.1
let value1 = prompt("Enter the first number: ");
let value2 = prompt("Enter the second number: ");

if (value1 > value2) {
  console.log("The larger number is: " + value1);
} else {
  console.log("The larger number is: " + value2);
}

// No.2
// let number = -3;

// if (number > 0) {
//   alert("The sign is +");
// } else if (number < 0) {
//   alert("The sign is -");
// } else {
//   alert("The number is zero");
// }

// let number = 7;

// if (number > 0) {
//   alert("The sign is +");
// } else if (number < 0) {
//   alert("The sign is -");
// } else {
//   alert("The number is zero");
// }


//No.3
// let num1 = prompt("Enter 1st value:");
// let num2 = prompt("Enter 2nd value:");
// let num3 = prompt("Enter 3rd value:");
// let num4 = prompt("Enter 4th value:");
// let num5 = prompt("Enter 5th value:");
// //Converting to numbers
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// num3 = parseFloat(num3);
// num4 = parseFloat(num4);
// num5 = parseFloat(num5);
// //Finding largest value
// let largest = num1;
// if (num2 > largest) {
//     largest = num2;
// }
// if (num3 > largest) {
//     largest = num3;
// }
// if (num4 > largest) {
//     largest = num4;
// }
// if (num5 > largest) {
//     largest = num5;
// }
// //Display largest value
// console.log("The largest value is" + largest);


// No.4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even.");
//     } else {
//       console.log(i + " is odd.");
//     }
//   }


// No.5
// let num1 = prompt("Enter marks for Sub1:");
// let num2 = prompt("Enter marks for Sub2:");
// let num3 = prompt("Enter marks for Sub3:");
// let num4 = prompt("Enter marks for Sub4:");
// let num5 = prompt("Enter marks for Sub5:");
// //sum of total amrks
// let sum =
//   parseFloat(num1) +
//   parseFloat(num2) +
//   parseFloat(num3) +
//   parseFloat(num4) +
//   parseFloat(num5);
// //calculating percentage
// let percentage = (sum / 500) * 100;
// //finding grade with percemtage
// if (percentage >= 100) {
//   grade = "A";
// } else if (percentage >= 90) {
//   grade = "B";
// } else if (percentage >= 80) {
//   grade = "C";
// } else if (percentage >= 70) {
//   grade = "D";
// } else {
//   grade = "F";
// }
// console.log("Your Grade is: " + grade);


// No.6
// Iterate through the integers from 1 to 100
// for (let i = 1; i <= 100; i++) {
//     // Check if the current number is a multiple of both 3 and 5
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     }
//     // Check if the current number is a multiple of 3
//     else if (i % 3 === 0) {
//       console.log("Fizz");
//     }
//     // Check if the current number is a multiple of 5
//     else if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//     // Otherwise, print the current number
//     else {
//       console.log(i);
//     }
//   }



// No.7
// //*
// //* *
// //* * *
// //* * * *
// //* * * * *
// //Display Rows
// for (let m = 1; m <= 5; m++) {
//   let star = "";
//   //Display Columns
//   for (let n = 1; n <= m; n++) {
//     star += "* ";
//   }
//   // Display Output
//   console.log(star);
// }

