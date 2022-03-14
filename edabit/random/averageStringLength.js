/*
Create a function that takes in a sentence and returns the average length of each word in that sentence. Round your result to  two decimal places 

Ignore punctuation when counting the length of a word
*/

const averageWordLength = (string) => {
  // turn string into array of words
  let splitString = string.split(""); // [ 'A', ' ', 'B', ' ', 'C', '.' ]
  // remove punctuation
  splitString.pop();
  //  ['A', ' ', 'B', ' ', 'C' ]
  let count = 0;
  let withoutSpaces = [];
  // iterate through array of words
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== " ") {
      count++; // 1 -> 2 -> 3
      withoutSpaces.push(splitString[i]);
    } else {
      continue;
    }
  }
  let average = withoutSpaces.length / count;
  console.log(withoutSpaces);

  // return avergae rounded to 2 decimal points
  return average.toFixed(2);
};

console.log(averageWordLength("A B C.")); //1.00
console.log(averageWordLength("What a gorgeous day.")); // 4.00
console.log(averageWordLength("Dude, this is so awesome!")); // 3.80
