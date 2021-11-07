/*
Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...

Here is an example of a flat list in code:

var flatList = "First line\nSecond Line\nThird Line\n";
console.log(flatList);
*/

ar currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

  function flatList(inventory) {
      let output = "";

      for (let i =0; i < inventory.length; i++) {
          let designer = inventory[i];
          let nombre  = designer.name;
          let shoesArray = designer.shoes;

          for (let x =0;x < shoesArray.length; x++) {
              let currentShoe = shoesArray[x].name;
              let cost = shoesArray[x].price;
              output += nombre+', '+currentShoe+', '+cost+ '\n'
          }
      }
      return output;
  }

  flatList(currentInventory);

