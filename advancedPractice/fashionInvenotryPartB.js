// Part B
// Please DO NOT paste code from before.

// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// 1
// Fashion Inventory Part-B
// Your function should return the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
// There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.
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

function calculateAveragePricePerDesigner(inventory) {
  let result = {
    designers: [],
  };

  for (let i = 0; i < inventory.length; i++) {
    let designerObject = inventory[i]; // {"name":"Brunello Cucinelli","shoes":[{"name":"tasselled black low-top lace-up","price":1000},{"name":"tasselled green low-top lace-up","price":1100},{"name":"plain beige suede moccasin","price":950},{"name":"plain olive suede moccasin","price":1050}]}  {"name":"Gucci","shoes":[{"name":"red leather laced sneakers","price":800},{"name":"black leather laced sneakers","price":900}]}
    let shoes = designerObject.shoes; // [{"name":"tasselled black low-top lace-up","price":1000},{"name":"tasselled green low-top lace-up","price":1100},{"name":"plain beige suede moccasin","price":950},{"name":"plain olive suede moccasin","price":1050}]
    let averagePricePerDesigner = {};
    averagePricePerDesigner.name = designerObject.name; //{"name":"Brunello Cucinelli"}{"name":"Gucci"}
    averagePricePerDesigner.averagePrice = getAveragePrice(shoes); // call helper function to
    result.designers.push(averagePricePerDesigner); // push inner obj with averages to result
  }
  return result;
}

// helper function to get average from array

function getAveragePrice(shoesArray) {
  let sum = 0;

  for (let x = 0; x < shoesArray.length; x++) {
    let currentShoe = shoesArray[x];
    let cost = currentShoe.price;
    sum += cost;
  }
  return sum / shoesArray.length;
}

// assert equals objects

function assertEqualObjects(actual, expected, testName) {
  // stringify objects before comparing
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "failed [" + testName + "] Expected " + expected + " but got " + actual
    );
  }
}

var expectedOutput = {
  designers: [
    {
      name: "Brunello Cucinelli",
      averagePrice: 1025,
    },
    {
      name: "Gucci",
      averagePrice: 850,
    },
  ],
};

let actualOutput = calculateAveragePricePerDesigner(currentInventory);

assertEqualObjects(
  actualOutput,
  expectedOutput,
  "should render proper formed nested obj with designer and their price average"
);
