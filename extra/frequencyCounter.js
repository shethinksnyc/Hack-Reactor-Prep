/* Frequency counter pattern
  use an object or set to collect values/frequencies of values

  Write a function called same, which accepts to arrays. the function should return true if every value in the array has its correspoinding value squared in the second array. the frequency of values must be the same. 
*/

//  N^2
const same2 = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    let currentIndex = array2.indexOf(array1[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }
    array2.splice(currentIndex, 1);
  }
  return true;
};

const array1 = [1, 2, 3, 2];
const squared = [9, 1, 4, 4];
const notSquared = [2, 4, 7, 8, 3];
const notSameValues = [1, 2, 6];

console.log(same2(array1, squared));

//  O(n)

const same = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] ** 2 !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

let test1 = [1, 2, 3, 2];
let test2 = [9, 1, 4, 4];

console.log(same(test1, test2)); //true
