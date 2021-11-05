/*
Currently, you have a budget of $100. You have a shopping list in decreasing priority, and you want to report how many items you bought and how much it cost you. Write a function shoppingSummary which accepts an array of shopping items (objects), and returns a string with the number of items you bought, and the total amount you spent.

Notes:

You cannot spend more than your budget ($100).
You have enough room for all the items (if you end up buying everything), so there's no item limit -- your only limit is your budget.
The list is mentioned to be in "decreasing priority" simply because you do not have to sort the input array to optimize for anything else. So do not worry about coming up with any other sorting algorithm for the most "bang for your buck" or what not :-)

*/
function shoppingList(list) {
  let items = 0;
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    let currentItem = list[i];
    let cost = currentItem.price;
    if (cost + total >= 100) {
      break;
    }
    total += cost;
    items++;
  }
  return "I got " + items + " items at $" + total;
}

var shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20,
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25,
  },
  {
    item: "cookware",
    price: 79.99,
    weightInPounds: 35,
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2,
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2,
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2,
  },
];

shoppingSummary(shoppingList); //"I got 3 items at $99.73"
