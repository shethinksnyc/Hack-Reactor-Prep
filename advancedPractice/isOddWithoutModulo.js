/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:

It does so without using the modulo operator (%).
It should work for negative numbers and zero.

*/

function isOddWithoutModulo(num) {
  // if num is 1
  if (num === 0) {
    return false;
  }
  num = Math.abs(num);

  while (num >= 2) {
    num = num - 2;
  }
  if (num === 1) {
    return true;
  } else {
    return false;
  }
}

var output = isOddWithoutModulo(-9);
console.log(output); // --> true
