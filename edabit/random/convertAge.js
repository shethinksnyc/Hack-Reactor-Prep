/*
Create a function that takes the age in years and returns the age in days 
*/

const calcAge = (age) => {
  let oneYear = 365;

  return age * oneYear;
};

const calcAge2 = (age) => {
  return age * 365;
};

console.log(calcAge(65)); // 23725
console.log(calcAge(0)); // 0
console.log(calcAge(20)); // 7300

console.log(calcAge2(65)); // 23725
console.log(calcAge2(0)); // 0
console.log(calcAge2(20)); // 7300
