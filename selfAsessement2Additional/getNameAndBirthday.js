// Given an object with this structure:
// var person = {
//     name: {
//       first: "Richard",
//       last: "Loeb"
//     },
//     birthDay: {
//       month: "July",
//       day: 12,
//       year: 1957
//     }
//   }

// Write a function getNameAndBirthday which returns the name and birthday in one line: Hint: Pay attention to the extra characters in the sample output.

function getNameAndBirthday(person) {
  let first = person.name.first;
  let last = person.name.last;
  let month = person.birthDay.month;
  let day = person.birthDay.day;
  let year = person.birthDay.year;

  return first + " " + last + ": " + month + " " + day + ", " + year;
}

var person = {
  name: {
    first: "Richard",
    last: "Loeb",
  },
  birthDay: {
    month: "July",
    day: 12,
    year: 1957,
  },
};

console.log(getNameAndBirthday(person)); //"Richard Loeb: July 12, 1957"

// how can i do this in a loop?
