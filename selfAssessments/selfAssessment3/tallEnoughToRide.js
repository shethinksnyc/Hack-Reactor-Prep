/*
Write a function tallEnoughToRide which takes in an array of people objects, and returns an array of names of people who are greater than or equal to 48 inches in height.
*/

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

function tallEnoughToRide(group) {
  let output = [];

  for (let i = 0; i < group.length; i++) {
    let currentPerson = group[i];
    let height = currentPerson.heightInInches;
    if (height >= 48) {
      output.push(currentPerson.name);
    }
  }
  return output;
}

tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];
