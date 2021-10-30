/*
Your task is to write a function that will find the longest single-word palindrome within an input phrase (string). The phrase inputted will only contain letters (no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive. If there are multiple palindromes of equal length, return the last one.

Ideally, your solution will use a native method (built into the language) called .sort(). Essentially, when called, this method takes a function that tells the sorting operation how it should order the resulting sorted array. We have supplied a function inside of the skeleton. Please consult this MDN documentation, and read it carefully: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 


*/

function findLongestPalindrome(sentence) {
  // split sentence into words
  let splitSentence = sentence.split(" ");
  let palindromes = [];
  // iterate words and collect the palindromes
  for (let i = 0; i < splitSentence.length; i++) {
    // sort the list of palindromes by word length
    if (isPalindrome(splitSentence[i])) {
      palindromes.push(splitSentence[i]);
    }
  }
  let sortedPalin = palindromes.sort(sortAscendingByLength);
  return sortedPalin[sortedPalin.length - 1];

  // return the largest item in the sorted list
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word === reverseString(word) ? true : false;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed");
  } else {
    console.log(
      "failed [" + testName + "] Expected " + expected + " but got " + actual
    );
  }
}

console.log(findLongestPalindrome("my pop is bob"));
console.log(findLongestPalindrome("anna is a mom"));

assertEqual(
  findLongestPalindrome("my pop is bob"),
  "bob",
  "finds last longest word that is a palindrome"
);
assertEqual(
  findLongestPalindrome("anna is a mom"),
  "anna",
  "finds last longest word that is a palindrome"
);
assertEqual(
  findLongestPalindrome("madam civic level ya racecar"),
  "raceca",
  "finds longest palindrome"
);
