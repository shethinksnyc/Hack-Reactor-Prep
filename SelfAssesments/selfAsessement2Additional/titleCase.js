// Write a function titleCase which takes in a string, and returns a title-cased string.

// Your function's results would look like:
// Hint: Explore the string methods toUpperCase and toLowerCase on MDN.

function titleCase(str) {
  // create output array
  let output = [];

  // split input string into array of words
  let words = str.split(" "); // ['peter','piper]['teXt, mEssAge]

  // iterate through word array
  for (let i = 0; i < words.length; i++) {
    // create empty string to append char to
    let titleCaseWord = "";
    // alias current word
    let word = words[i]; // peter->piper->
    // append first character and make upperCase
    titleCaseWord += word[0].toUpperCase(); // Peter Piper
    // use slice method to append from index 1 of current word ,append, make LowerCase
    titleCaseWord += word.slice(1).toLowerCase();
    // push titleCased words into output array
    output.push(titleCaseWord);
  }
  // return joined array of words with
  return output.join(" ");
}

console.log(titleCase("peter piper")); //"Peter Piper"
console.log(titleCase("teXt mEssAge")); //"Text Message"
console.log(titleCase("more to me than meets the eye")); //"More To Me Than Meets The Eye"
