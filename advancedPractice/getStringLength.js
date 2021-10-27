// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:

// Do NOT use any native 'length' methods.
// You might consider using 'substring' or 'slice' as alternatives.

function getStringLength(string) {
  let count = 0; // create count variable

  // if string count is not undefined increment count
  while (string[count] !== undefined) {
    // h e l l o
    count++;
  }
  return count;
}

var output = getStringLength("hello");
console.log(output); // --> 5
