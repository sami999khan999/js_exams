// const birthYearNitu = 1997;
// const birthYearRitu = 1995;

// Calculate their ages corresponding to the recent year and compare these to determine that who is older or younger.
// const birthYearNitu = 1997;
// const birthYearRitu = 1995;
// const recentYear = 2022;

// const ageNitu = recentYear - birthYearNitu;
// const ageRiru = recentYear - birthYearRitu;

// if (ageNitu < ageRiru) {
//   console.log(`Nitu is ${ageNitu} years old and she is younger.`);
// } else {
//   console.log(`Ritu is ${ageRiru} years old and she is older.`);
// }

//===========================================================//

// const arr1 = [23, 24, 32, 28, 26, 36, 21, 25];
// const arr2 = [88, 86, 96, 75];

// Loop through the "arr1" and add all elements into the beginning of the "arr2".

// const arr1 = [23, 24, 32, 28, 26, 36, 21, 25];
// const arr2 = [88, 86, 96, 75];
// function combiningArray(arr1, arr2) {
//   let mainArray = [];

//   for (let i = 0; i < arr1.length; i++) {
//     mainArray.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     mainArray.push(arr2[i]);
//   }
//   return mainArray;
// }
// console.log(combiningArray(arr1, arr2));

//===========================================================//

// const years = [1991, 1994, 1995, 1996, 1998];

// Duplicate this array into a new array only including the even years using the for loop and continue statement.

// const years = [1991, 1994, 1995, 1996, 1998];

// for (let i = 0; i < years.length; i++) {
//   if (years[i] % 2 === 0) {
//     console.log(years[i]);
//   }
// }

//===========================================================//

// const arr = [11, 27, 31, 45, 52, 61, 77, 84];

// Create a function expression and return the total sum of all elements inside the "arr", but use a while loop instead.

// const arr = [11, 27, 31, 45, 52, 61, 77, 84];

// const totalsum = function (arr) {
//   let sumAllNumbers = 0;
//   let countDown = 0;
//   while (countDown < arr.length) {
//     sumAllNumbers = sumAllNumbers + arr[countDown];
//     countDown += 1;
//   }
//   return sumAllNumbers;
// };

// console.log(`The total Sum of the "arr" is ${totalsum(arr)}`);

// ===========================================================//

// Write an arrow function to check if a year is leap or not.

// const leapYear = (year) => {
//   if (0 == year % 400 || (0 == year % 4 && 0 != year % 100)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// };

// leapYear(2012);

// ===========================================================//

// Find the all odd numbers between 1 to 100 using a for loop.

// for (let i = 0; i < 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// ===========================================================//

// const tumpaArray = [
//   "Tumpa",
//   "Rahman",
//   2022 - 1996,
//   "programmer",
//   ["Sumaiya", "Nimmi", "Riyad"],
//   true,
// ];

// Perform these two tasks below:
// a) Loop through the array and return all
// elements from it, but loop it in backwards.

// b) Print the statement dynamically
// same as below using
// template literals:

// "Tumpa is 26, and she is a programmer.
// She has 3 friends, and Nimmi is her
// best friend."

// const tumpaArray = [
//   "Tumpa",
//   "Rahman",
//   2022 - 1996,
//   "programmer",
//   ["Sumaiya", "Nimmi", "Riyad"],
//   true,
// ];

// for (let i = tumpaArray.length - 1; i >= 0; i--) {
//   console.log(tumpaArray[i]);
// }

// const dynamicVariable = `${tumpaArray[0]} is ${tumpaArray[2]} , and she is a ${tumpaArray[3]}. She has ${tumpaArray[4].length} friends, and ${tumpaArray[4][1]} is her best friend.`;

// console.log(dynamicVariable);

// ===========================================================//

// Declare an object for a student including his/her "fullName" and "birthYear" property. Now create a method in the object to calculate the age using "this" keyword. Finally call that method and return the calculated age.

// const student = {
//   fullName: "Mr.X",
//   birthYear: 1997,
//   age: function (currentYear) {
//     return `${this.fullName} is ${currentYear - this.birthYear} Year's Old`;
//   },
// };
// console.log(student.age(2022));

// ===========================================================//

// Write two functions as the name suggest "logCutter" and "furnitureMaker". Use your own imagination to create a callback function while "furnitureMaker" takes "log" as a number argument.

// function logNumber(log) {
//   console.log(`Total logs ${log}`);
// }

// function logCutter(logNumber, trees) {
//   const log = trees * 10;
//   logNumber(log);
// }

// logCutter(logNumber, 2);
