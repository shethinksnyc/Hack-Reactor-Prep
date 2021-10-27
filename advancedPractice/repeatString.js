/*Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

*/

function repeatString(string, num) {
  let output = ""; // create output string

  let count = 0; // create counter
  while (count < num) {
    // while count is less than input number
    output += string; // concat input string to output
    count++; // increment string
  }
  return output; // return output string
}

var output = repeatString("code", 3);
console.log(output); // --> 'codecodecode'
