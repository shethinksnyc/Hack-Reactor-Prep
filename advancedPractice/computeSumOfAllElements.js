// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

function computeSumOfAllElements(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
