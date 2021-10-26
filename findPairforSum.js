// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

function findPairForSum(numbers, target) {
  // create output array
  let output = [];

  // iterate through input numbers
  for (let i = 0; i < numbers.length; i++) {
    // alias current number
    let first = numbers[i]; // 3 -> 34 -> 4
    // second loop that iterates through input numbers
    for (let j = 0; j < numbers.length; j++) {
      // alias current number at j
      let second = numbers[j]; // 3 -> 34 -> 4
      // if current i + current j equal target sum
      if (first + second === target) {
        // push into output array
        output.push(first);
      }
    }
  }
  // return output array
  return output;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

// There are other ways to solve this that improve speed and save memory
// look into hash mapping and sorting
