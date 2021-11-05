/*
You were put in charge of ordering for tonight's company get-together, and you were given a data set with people's meal preferences and dietary restrictions. Write a function orderAVegetarianDish which takes in an array of employee objects, and returns true if at least 1 person is listed "vegetarian" on their "mealPreferences". Otherwise, your function should return false.

*/

function orderVegetarianDish(staff) {
  for (let i = 0; i < staff.length; i++) {
    let currentGuest = staff[i];
    let mealType = currentGuest.mealPreferences;
    if (mealType === "vegetarian") {
      return true;
    }
  }
  return false;
}

var staffA = [
  {
    name: "Lia",
    department: "Human Resources",
    dietaryRestrictions: [],
    mealPreferences: "no preferences",
  },
  {
    name: "Sebastian",
    department: "Engineering",
    dietaryRestrictions: ["dairy free", "gluten free"],
    mealPreferences: "vegetarian",
  },
  {
    name: "Ari",
    department: "Executive",
    dietaryRestrictions: ["dairy free"],
    mealPreferences: "vegetarian",
  },
  {
    name: "Martha",
    department: "Legal",
    dietaryRestrictions: ["nut allergies"],
    mealPreferences: "non-vegetarian",
  },
];

orderAVegetarianDish(staffA); //true
