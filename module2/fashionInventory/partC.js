/*
Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

Brunello Cucinelli, tasselled black low-top lace-up, 1000
Gucci, black leather laced sneakers, 900

var flatList = "First line\nSecond Line\nThird Line\n";
console.log(flatList);

*/
var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function listAllBlackShoes(inventory) {
  let allBlack = "";

  for (let i = 0; i < inventory.length; i++) {
    let designer = inventory[i];
    let nombre = designer.name;
    let shoesArray = designer.shoes;

    for (let x = 0; x < shoesArray.length; x++) {
      let currentShoe = shoesArray[x].name;
      let cost = shoesArray[x].price;
      let splitShoeName = currentShoe.split(" ");
      for (let j = 0; j < splitShoeName.length; j++) {
        if (splitShoeName[j] === "black") {
          allBlack += nombre + ", " + currentShoe + ", " + cost + "\n";
        }
      }
    }
  }
  return allBlack;
}

listAllBlackShoes(currentInventory);

// try again with helper function
