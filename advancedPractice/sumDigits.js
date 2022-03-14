// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.
// If the number is negative, the first digit should count as negative.

// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

function sumDigits(num) {
  let isPositive = true;
  if (num < 0) {
    num = Math.abs(num);
    isPositive = false;
  }
  let firstNum = 0;
  let stringNum = num.toString();
  let stringArr = stringNum.split("");
  let sum = 0;
  for (let i = 0; i < stringArr.length; i++) {
    firstNum = parseInt(stringArr[0]);
    sum += parseInt(stringArr[i]);
  }
  if (isPositive) {
    return sum;
  } else {
    return sum - firstNum - firstNum;
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testName + "] expected " + expected + ", but got " + actual
    );
  }
}

let test1 = sumDigits(12345);
let expected1 = 15;
assertEqual(test1, expected1, "properly adds all digits in input number");

let test2 = sumDigits(-23789);
let expected2 = 25;
assertEqual(test2, expected2, "properly adds all digits in negative number");
