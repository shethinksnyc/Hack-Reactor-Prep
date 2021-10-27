/*
Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.

Example input:
    var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

Do not change the input array. Assume all elements in the input array will be of type 'string'.

Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

*/

function transformFirstAndLast(array) {
  let first = array[0]; // Queen
  let last = array[array.length - 1]; // Beyonce
  let output = {};
  output[first] = last; // assign key-value pair
  return output; // return new obj
}

var input = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
