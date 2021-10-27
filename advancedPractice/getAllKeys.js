/*
Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:
    var input = {
        name : 'Sam',
        age : 25,
        hasPets : true
};
Do not use "Object.keys" to solve this prompt.

Note that your function should be able to handle any object passed in it.

*/

function getAllKeys(object) {
  let output = [];

  for (let keys in obj) {
    output.push(keys);
  }
  return output;
}

var input = {
  name: "Sam",
  age: 25,
  hasPets: true,
};

console.log(getAllKeys(input));
