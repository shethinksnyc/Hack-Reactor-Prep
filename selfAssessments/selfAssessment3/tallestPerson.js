/*
Working off of the same data structure as tallEnoughToRide, write a function tallestPerson which takes in an array of people objects as well, and returns the name of the person with the greatest height, along with how tall they are (see sample input below).

*/

function tallestPerson(group) {
  let tallest = group[0];

  for (let i = 0; i < group.length; i++) {
    let currentPerson = group[i];
    let height = currentPerson.heightInInches;
    if (height > tallest.heightInInches) {
      tallest = currentPerson;
      return tallest.name + " at " + tallest.heightInInches + " inches";
    }
  }
}

var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52,
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45,
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55,
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48,
  },
];
tallestPerson(groupA); //"Kiana at 55 inches"
