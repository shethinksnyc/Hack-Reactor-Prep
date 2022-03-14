/*You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/

const transposeTwoStrings = (array) => {
  for (let i = 0; i < array.length; i++) {
    let currentWord = array[i];
    let splitCurrent = currentWord.split("");
    let first = array[0];
    let second = array[1];
    return first[0] + second[0];
  }
};
const test = transposeTwoStrings(["Hello", "World"]);
console.log(test);
