/*
Write a function called assertWithinRange. It will be a function that takes four parameters: low a number value, which will be the lower bound on our range; high, also a number value, which will be upper bound on our range; actual, which will be a number value, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return a number value). Finally, testName will be a string, and should describe what a call to assertWithinRange is verifying about the function being tested.

The idea here is similar to when someone says, "Give me a number between 1 and 5". Let us further consider that what you mean is "1, 2, 3, 4, or 5", i.e. our range should be inclusive.
*/

function assertWithinRange(low, high, actual, testName) {
  if (actual >= low && actual < high) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" +
        testName +
        '] "' +
        actual +
        '" not within range ' +
        low +
        " to " +
        high
    );
  }
}

// Success Case
let blackJackScore1 = 20;
assertWithinRange(1, 21, "Black Jack Score should be between 1 and 21");
var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, "die roll should be between 1 and 6");
// console output:
// passed

// Failure Case
var price = 101;
assertWithinRange(1, 100, price, "price should be between 1 and 100");

// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100
