//Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'
// Hint:
// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '

function isRotated(string1, string2) {
  // double string to copmare
  let double = string1 + string1;

  let index = double.indexOf(string2);
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "failed [" + testName + " expected " + expected + ", but got " + actual
    );
  }
}

// get after
//

let actual1 = isRotated("get after", "rget afte");
let actual2 = isRotated("rget afte", "erget aft");
let actual3 = isRotated("erget aft", "terget af");
let actual4 = isRotated("erget aft", "no");
let actual5 = isRotated("nah", "erget aft");

assertEqual(actual1, true, "compares strings for rotation");
assertEqual(actual2, true, "compares strings for rotation");
assertEqual(actual3, true, "compares strings for rotation");
assertEqual(actual4, false, "compares strings for rotation");
assertEqual(actual5, false, "compares strings for rotation");
