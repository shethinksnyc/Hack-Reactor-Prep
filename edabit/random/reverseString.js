/*
Write a function that reverses all of the words within the string passed in
*/

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world!")); // 'world! hello'
console.log(reverseWords("foobar")); // "foobar"
console.log(reverseWords("kata editor")); // "editor kata"

/*
The spread syntax is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.
The spread syntax is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.

    [...value]

*/

const reverseWordDecon = (string) => {
  return [...string.split(" ")].reverse().join(" ");
};

console.log(reverseWordDecon("hello world!")); // 'world! hello'
console.log(reverseWordDecon("foobar")); // "foobar"
console.log(reverseWordDecon("kata editor")); // "editor kata"
