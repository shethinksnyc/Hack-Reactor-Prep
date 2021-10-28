/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

detectOutlierValue("2 4 7 8 10"); // 3
detectOutlierValue("1 10 1 1");  // 2 

*/

function detectOutlierValue(string) {
  let numbersArray = string.split(" ");
  let even = 0;
  let odd = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    if (parseInt(numbersArray[i]) % 2 === 1) {
      odd++;
    } else {
      even++;
    }
  }

  if (even > odd) {
    for (let x = 0; x < numbersArray.length; x++) {
      if (numbersArray[x] % 2 === 1) {
        let outlier = x + 1;
        return outlier;
      }
    }
  } else {
    for (let j = 0; j < numbersArray.length; j++) {
      if (numbersArray[j] % 2 === 0) {
        let outlier = j + 1;
        return outlier;
      }
    }
  }
}

console.log(detectOutlierValue("2 4 7 8 10"));
console.log(detectOutlierValue("1 10 1 1"));
