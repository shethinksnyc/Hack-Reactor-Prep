// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
function detectOutlierValue2(numString) {
  // split num string into array of num
  let numbers = numString.split(" ");
  let numEven = [];
  let numOdds = [];

  // iterate through arrya of numbers
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num % 2 === 0) {
      numEven.push(num);
    } else {
      numOdds.push(num);
    }
    if (numEven.length > numOdds.length && num % 2 !== 0) {
      return i + 1;
    } else if (numOdds.length > numEven.length && num % 2 !== 1) {
      return i + 1;
    }
  }
}

// test
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("PASSED");
  } else {
    console.log(
      "FAILED [" + testName + " expected " + expected + ", but got " + actual
    );
  }
}

let test1 = detectOutlierValue2("2 4 6 8 7");
let test2 = detectOutlierValue2("1 3 2 7 9");

assertEqual(test1, 5, "returns character count of outlier");
assertEqual(test2, 3, "returns character count of outlier");
