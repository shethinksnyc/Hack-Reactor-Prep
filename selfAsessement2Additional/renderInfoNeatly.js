// Someone who recorded these people's names and birthdays wasn't meticulous with their data entry, and input information with inconsistent capitalizations.

// Write a function 'renderInfoNeatly' which takes in a person object similar to the previous example, and returns the person's name and birthday with proper casing.

function titleCase(str) {
  var titleCaseArr = [];
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var titleCaseWord = "";
    titleCaseWord += word[0].toUpperCase();
    titleCaseWord += word.slice(1).toLowerCase();
    titleCaseArr.push(titleCaseWord);
  }
  return titleCaseArr.join(" ");
}

function getNameAndBirthday(person) {
  var first = person.name.first;
  var last = person.name.last;
  var month = person.birthDay.month;
  var day = person.birthDay.day;
  var year = person.birthDay.year;
  return first + " " + last + ": " + month + " " + day + ", " + year;
}

function renderInfoNeatly(person) {
  return titleCase(getNameAndBirthday(person));
}

var anotherPerson = {
  name: {
    first: "kylA",
    last: "liVingSton",
  },
  birthDay: {
    month: "octobeR",
    day: 20,
    year: 1961,
  },
};

console.log(renderInfoNeatly(anotherPerson)); //"Kyla Livingston: October 20, 1961"
