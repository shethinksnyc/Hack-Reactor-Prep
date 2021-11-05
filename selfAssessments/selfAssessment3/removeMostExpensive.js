/*
Suppose that you wanted to take out the most expensive item on your shopping list. Write a function removeMostExpensive which returns a new array without the most expensive thing in the list. Your function should preserve the order of the items in this array.

*/
function removeMostExpensive(list) {
  let mostExpensive = list[0];
  let output = [];

  for (let i = 0; i < list.length; i++) {
    let currentItem = list[i];
    let cost = currentItem.price;
    if (cost > mostExpensive.price) {
      mostExpensive = currentItem;
    }
    if (currentItem !== mostExpensive) {
      output.push(currentItem);
    }
  }
  return output;
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

removeMostExpensive(shoppingList);
