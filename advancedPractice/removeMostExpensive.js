// remove most expensive item in shopping cart
// return new array without most expensive item

function removeMostExpensive(list) {
  let mostExpensive = list[0]; // {item:"rice",price:12.75,weightInPounds:20}

  for (let i = 0; i < list.length; i++) {
    let currentItem = list[i]; // {"item":"rice","price":12.75,"weightInPounds":20} {"item":"chicken","price":6.99,"weightInPounds":1.25} ..
    // if current item price is greater than most Expensive price
    if (currentItem.price > mostExpensive.price) {
      // current item becomes most expensive
      mostExpensive = list[i]; // {item:'cookware,price:79.99,weightInPounds:35}
    }
  }
  let output = [];

  for (let i = 0; i < list.length; i++) {
    // if current item is Not most expensive
    if (list[i] !== mostExpensive) {
      // push current item into output array
      output.push(list[i]);
    }
  }
  // return list without most expensive item
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

//notice that the element with "cookware" is missing

console.log(removeMostExpensive(shoppingList));
