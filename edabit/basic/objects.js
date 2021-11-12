// Write a function that converts an object into an array of keys and values.

function objectToArray(object) {
  let output = [];
  for (let keys in object) {
    let innerArr = [];
    innerArr.push(keys, object[keys]);
    output.push(innerArr);
  }
  return output;
}

objectToArray({
  D: 1,
  B: 2,
  C: 3,
}); // ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10,
}); // [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

function maximumScore(hand) {
  let total = 0;

  for (let i = 0; i < hand.length; i++) {
    let currentCard = hand[i];
    let currentPoints = currentCard.score;
    total += currentPoints;
  }
  return total;
}

maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
]); // ➞ 28

maximumScore([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 },
]); // ➞ 15

// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
function afterNYears(object, n) {
  for (let keys in object) {
    object[keys] += n;
  }
  return object;
}

let input = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};

function assertObjectEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testName + " expected " + expected + ", but got " + actual
    );
  }
}

let actual = afterNYears(input, 5);
let expected = { Joel: 37, Fred: 49, Reginald: 70, Susan: 38, Julian: 18 };
assertObjectEqual(
  actual,
  expected,
  "should return object with person age increased proprely by input value"
);

// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
