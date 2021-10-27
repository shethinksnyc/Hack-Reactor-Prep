/*
Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() 

Notes:

Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
0 % ANYNUMBER = 0.
ANYNUMBER % 0 = NaN.
If either operand is NaN, then the result is NaN.
Modulo always returns the sign of the first number, even if the remainder is 0.
*/

function modulo(num1, num2) {
  if (num2 < 0 || num1 < 0) {
    // if either input is less than zero / negattive
    return 0;
  }
  if (num1 === NaN || num2 === NaN) {
    // if either input is Not a Number
    return NaN;
  }
  let sign = num1 < 0 ? -1 : 1; // 1
  let dividend = Math.abs(num1); // 25
  let divisor = Math.abs(num2); // 4
  let counter = dividend; // while loop counter set at 25
  while (counter >= divisor) {
    // if counter is greater than or equal to 4
    counter = counter - divisor; // 21 17 13 9 5 1
  }
  return sign * counter; // 1 * 1
}

var output = modulo(25, 4);
console.log(output); // --> 1

// runs outside of Hack Reactor IDE && JS console
