/*
Write a function called assertArraysEqual. It will be a function that takes three parameters: actual will be an array of scalar values, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return an array of scalar values); expected, also an array of scalar values, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertArraysEqual is verifying about the function being tested.

Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both arrays to strings so I can compare two strings" type of technique to implement this.

We cannot simply compare an array directly to another array, as we could with scalar values. Consider the following code:



*/
function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length;
  let sameValue = true;

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      sameValue = false;
    }
  }
  if (sameLength && sameValue) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testname + "] Expected " + expected + " but got, " + actual
    );
  }
}
// success case
var expected = ["b", "r", "o", "k", "e", "n"];
var actual = "broken".split("");
assertArraysEqual(actual, expected, "splits string into array of characters");
// console output:
// passed

// failure case
var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7);
assertArraysEqual(actual, expected, "generates first 7 Fibonacci numbers");
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"
