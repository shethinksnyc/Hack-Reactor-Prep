/*
Write an "assertEqual" function once more, from memory. Please DO NOT simply PASTE in from before (If you have to go back and look at your previously-implemented code once, that is certainly okay, but come back here and write it from memory). Then use your assertion function in a series of test cases to thoroughly test the code. Use categorical reasoning to consider all the useful cases. The only automated test will be one to ensure that you have created a function that is named assertEqual. It is up to you to construct the rest of the "test suite".

The code under test is a function called every. every is an example of a "higher order" function, meaning that it takes as a parameter, another function (higher order functions can also return functions as values). This function takes two parameters; the first will be an array of scalar values, and the second parameter will be callbackFunction. Thus, when you are creating a test suite to verify that every works, you are going to need a function that you will use as an argument when you call every. Think about it like this, every is going to iterate over an array of scalar values, and apply a function to every value. This function MUST return a boolean value, mainly because we want every to tell us whether or not, EVERY value in the array returns true when the callbackFunction is called upon it.
*/

// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    if (doesEveryElementMatch === false) {
      return doesEveryElementMatch;
    }
    doesEveryElementMatch = callbackFunction(array[i]);
  }

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testName + "] Expected " + expected + " but got " + actual
    );
  }
}

// callbackFunction
function greaterThan(val) {
  return val > 10;
}

// TESTS CASES

let test1 = [11, 12, 13, 14, 15, 16];
let test1Actual = every(test1, greaterThan);
assertEqual(test1Actual, true, "should return true if all numbers are greater");

let test2 = [, 12, 13, 14, 15, 16, 4];
let test2Actual = every(test2, greaterThan);
assertEqual(
  test2Actual,
  false,
  "should return false if any of the values are not greater"
);
