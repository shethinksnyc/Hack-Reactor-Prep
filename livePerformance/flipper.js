// Flip every pair of characters in a string.

// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(string) {
  let output = "";

  // split string
  let splitString = string.split(""); // [c,h,e,c,k,,]

  // iterate through stringArray up unitl "!" in increments of 2
  for (let i = 0; i < splitString.length - 1; i += 2) {
    // append to output current char +1 of i && currentchar i
    output += splitString[i + 1] + splitString[i];
  }
  // append last char
  output += splitString[splitString.length - 1];
  // return
  return output;
}

var input =
  "check out how interesting this problem is, it's insanely interesting!";

// test for function
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log("FAILED [" + testName + " expected " + " but got " + actual);
  }
}

let test1 = flipPairs(input);
let expected =
  "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
assertEqual(test1, expected, "flips pairs of strings in a string");
