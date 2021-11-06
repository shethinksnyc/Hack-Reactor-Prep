/*
Write a function called assertObjectsEqual. It will be a function that take three parameters: actual will be an object with scalar values, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return an object with scalar values); expected, also an object with scalar values, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertObjectsEqual is verifying about the function being tested.

Please use JSON.stringify() on both objects, then compare them.

Mentioned previously, but worth noting again: In general, these assertion functions will need some kind of code or separate functions to test. For the first four Testing problems, we will provide examples that include functions like updateObject. It is not necessary for you to create these functions. Rather, they are presented to aid your understanding of how assertObjectsEqual should behave once you have built it.




*/

function updateObject(obj) {
  obj.person = "";
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testName + "] Expected " + expected + ", but got " + actual
    );
  }
}

// SUCCESS CASE:

var person = {
  firstName: "Cassidy",
  lastName: "Jacobs",
};

function updateObject(object, key, value) {
  for (let keys in object) {
    if (keys === key) {
      object[key] = value;
    }
  }
  return object;
}

updateObject(person, "firstName", "Jack");

var expected = {
  firstName: "Jack",
  lastName: "Jacobs",
};

assertObjectsEqual(
  person,
  expected,
  "updates person's existing first name field"
);
// console output:
// passed
