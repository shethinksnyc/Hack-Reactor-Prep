// Write a function getPeopleBornIn which takes in an array and string month, and returns a new array of people and their birthday information who were all born in the given month.
// A call to your function getPeopleBornIn(staff, 'August');

// Would return:

// ["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]

function getPeopleBornIn(staff, month) {
  let output = [];

  // iterate through input array of employees [{{}}];
  for (let i = 0; i < staff.length; i++) {
    let employee = staff[i]; //{"name":{"first":"Alyssa","last":"Hacker"},"birthDay":{"month":"June","day":5,"year":1987}}
    let firstName = employee.name.first; // Alyssa Ben Eva Lem
    let lastName = employee.name.last; // Hacker Bitdiddle
    let months = employee.birthDay.month; // June August March
    let day = employee.birthDay.day; // 5 19 29
    let year = employee.birthDay.year; // 1987 1984 1980
    if (months === month) {
      // if current employee month === input month
      output.push(firstName + " " + lastName + ":" + months + " " + day + year); // push to output array
    }
  }
  // return output
  return output;
}

var staff = [
  {
    name: { first: "Alyssa", last: "Hacker" },
    birthDay: { month: "June", day: 5, year: 1987 },
  },
  {
    name: { first: "Ben", last: "Bitdiddle" },
    birthDay: { month: "August", day: 19, year: 1984 },
  },
  {
    name: { first: "Eva", last: "Ator" },
    birthDay: { month: "March", day: 29, year: 1980 },
  },
  {
    name: { first: "Lem", last: "Tweakit" },
    birthDay: { month: "August", day: 11, year: 1989 },
  },
  {
    name: { first: "Louis", last: "Reasoner" },
    birthDay: { month: "November", day: 17, year: 1992 },
  },
];

console.log(getPeopleBornIn(staff, "August"));
