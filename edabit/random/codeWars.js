/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Write a function that returns url with anything after the anchor(#) removed.
*/

const removeUrlAnchor = (url) => {
  let splitString = url.split("");

  let output = "";
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== "#") {
      output += splitString[i];
    } else {
      break;
    }
  }
  return output;
};

console.log(removeUrlAnchor("www.codewars.com#about")); //  "www.codewars.com"
console.log(removeUrlAnchor("www.codewars.com?page=1")); //"www.codewars.com?page=1"
console.log(removeUrlAnchor("https://www.bacon.int#danpen")); // "https://www.bacon.int"

//

const removeUrlAnchor2 = (url) => {
  return url.split("#")[0];
};

console.log(removeUrlAnchor2("http://www.spam.com#brochsteck")); // "http://www.spam.com"
console.log(removeUrlAnchor2("https://egg.com#mieng")); // "https://egg.com"
console.log(removeUrlAnchor2("https://rat.net#thrafsma")); // "https://rat.net"
