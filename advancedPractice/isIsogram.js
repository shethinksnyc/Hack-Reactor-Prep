/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a function that determines whether a string is an isogram, following the format of the previous problems. It should return true if the input string is an isogram, and should return false otherwise.

While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

Notes: *returning undefined in between??

Assume your input is only letters.
Assume the empty string is an isogram.
Ignore case.
Follow the pseudocode exactly!
*/

function isIsogram(text) {
  let hash = {};
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (hash[text[i]]) {
      return false;
    }
    hash[text[i]] = true;
  }
  return true;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("PASSED");
  } else {
    console.log(
      "FAILED [" + testName + "] Expected " + expected + " but got " + actual
    );
  }
}

let testOne = isIsogram("stringg");
let testTwo = isIsogram("string");
let testThree = isIsogram("LowerCas");
console.log(assertEqual(testOne, false, "isNot isogram"));
console.log(assertEqual(testTwo, true, "is isogram"));
console.log(assertEqual(testThree, false, "ignoreCasing"));
