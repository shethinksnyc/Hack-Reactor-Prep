/*
Write an "assertObjectsEqual" function once more, from memory. Please DO NOT simply PASTE in from before (If you have to go back and look at your previously-implemented code once, that is certainly okay, but come back here and write it from memory). Then use your assertion function in a series of test cases to thoroughly test the code. Use categorical reasoning to consider all the useful cases. The only automated test will be one to ensure that you have created a function that is named assertObjectsEqual. It is up to you to construct the rest of the "test suite".

Similarly to last time, the first step will be to set up some tests for the code, then correct the errors in the implementation. Be sure to organize tests for both functions. If you are truly stumped, please feel free to consult the reference answers in the last section of the module. Ideally, you should eventually complete the problem on your own.
*/

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj["fullName"] = firstName + " " + lastName;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testName + "] expected " + expected + " but got " + actual
    );
  }
}
// TESTS CASES

let guest = {
  firstName: "Dexter",
  lastName: "Morgan",
};

let actual = addFullNameProp(guest);
let expected = {
  firstName: "Dexter",
  lastName: "Morgan",
  fullName: "Dexter Morgan",
};

assertObjectsEqual(
  actual,
  expected,
  "Should return input obj with added fullName prop"
);
