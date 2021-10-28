/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:

If there is a tie, it should return the first word in the tie.

*/

function getLongestOfThreeWords(word1, word2, word3) {
  let wordArray = [word1, word2, word3];
  let longest = wordArray[0];
  // iterate through word array
  for (let i = 0; i < wordArray.length; i++) {
    // if current word length > longest length
    if (wordArray[i].length > longest.length) {
      // instantiate current word into longest
      longest = wordArray[i];
    }
  }
  // return longest string
  return longest;
}

var output = getLongestOfThreeWords("these", "three", "words");
console.log(output); // --> 'these'
