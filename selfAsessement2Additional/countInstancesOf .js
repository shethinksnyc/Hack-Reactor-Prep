// Write a function countInstancesOf which takes in a letter (string) and a sentence (string), and returns the number of occurences of that letter

// Your function's results would look like:

function countInstancesOf(letter, sentence) {
  // create output
  let occurrences = 0;

  // iterate through input sentence
  for (let i = 0; i < sentence.length; i++) {
    // if current character is equal to input letter
    if (sentence[i] === letter) {
      // increment occurrence var
      occurrences++;
    }
  }
  // return occurrences
  return occurrences;
}

console.log(countInstancesOf("a", "mississippi is the best river ever")); //0
console.log(countInstancesOf("i", "mississippi is the best river ever")); //6
console.log(countInstancesOf("b", "mississippi is the best river ever")); //1
