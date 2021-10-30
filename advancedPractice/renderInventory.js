/*
Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}


//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...
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

function renderInventory(inventory) {
  let output = "";
  for (let i = 0; i < inventory.length; i++) {
    let designerObject = inventory[i]; // {name:'Bruno Cucinelli'}{name:'Gucci'};
    let designerName = designerObject.name; // Brunello Cucinelli Gucci
    let innerArray = designerObject.shoes;
    for (let x = 0; x < innerArray.length; x++) {
      let shoes = innerArray[x];
      let currentShoe = shoes.name;
      let cost = shoes.price;
      output += designerName + ", " + currentShoe + ", " + cost + "\n";
    }
  }
  return output;
}

console.log(renderInventory(currentInventory));

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
