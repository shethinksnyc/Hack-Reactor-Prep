/*
You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

Your function should return the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

*/
function calculateAveragePricePerDesigner(inventory) {
  let output = {
    designers: [],
  };
  for (let i = 0; i < inventory.length; i++) {
    let innerObj = {};
    let currentDesigner = inventory[i];
    let zapatos = currentDesigner.shoes;
    innerObj.name = currentDesigner.name;
    let sum = 0;
    let count = 0;
    for (let x = 0; x < zapatos.length; x++) {
      let currentPrice = zapatos[x].price;
      sum += currentPrice;
      count++;
    }
    let average = sum / count;
    innerObj.averagePrice = average;
    output.designers.push(innerObj);
  }
  return output;
}

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
