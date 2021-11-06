/*
Write an "assertEqual" function once more, from memory. Please DO NOT simply PASTE in from before (If you have to go back and look at your previously-implemented code once, that is certainly okay, but come back here and write it from memory). Then use your assertion function in a series of test cases to thoroughly test the code. Use categorical reasoning to consider all the useful cases. The only automated test will be one to ensure that you have created a function that is named assertEqual. It is up to you to construct the rest of the "test suite".

*/

// write a function
// use an assert function to test
// 2 test cases

function isGreaterThan(value) {
  return value > 100000;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testName + "] expected " + expected + " but got " + actual
    );
  }
}

let test1 = isGreaterThan(127000);
let expected = true;
assertEqual(
  test1,
  expected,
  "Should return true if value is greater than 100,000"
);

let test2 = isGreaterThan(98000);
let expected2 = false;
assertEqual(test2, expected2, "Not within threshold, should return false");
