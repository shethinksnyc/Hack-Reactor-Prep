/*
Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:

var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.
*/

function transformArrayToObject(array) {
  let output = {};

  for (let i = 0; i < array.length; i++) {
    let innerArray = array[i]; // ['make','Ford']
    let key = array[i][0]; // make
    let value = array[i][1]; // Ford
    output[key] = value; // {make: 'Ford'},{}
  }
  return output;
}

var input = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];

console.log(transformArrayToObject(input));
