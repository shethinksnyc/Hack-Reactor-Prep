/*
Write a function identity which expects 1 argument and simply returns that input value.

*/

function identity(input) {
  //implement the function described above, here
  return input;
}


console.log(identity("hello world"); //"hello world"
console.log(identity(500)); //500)

/*
Write a function coffeeLover which takes in a boolean value, and returns the string "Enjoy a cup for free!" if the input is true, or "Take a look at our other drinks!" if the input is false.

*/
function coffeeLover(bool){
    if (bool === true) {
        return "Enjoy a cup for free!";
    }else {
        return "Take a look at our other drinks!";
    }
  
}

coffeeLover(true); //"Enjoy a cup for free!"
coffeeLover(false); //"Take a look at our other drinks!"

/*
Write a function coffeeLoverExtended which takes in an object with the structure like:

*/

function coffeeLoverExtended(customer){
    if (customer.enjoysCoffee === true) {
        return "Enjoy a cup for free!";
    }else {
        return "Take a look at our other drinks!";
    }
  }

var customer001 = {
    name: "John Riley",
    ticketNumber: "A01",
    enjoysCoffee: true
  };
  
  //likewise..
  
  var customer002 = {
    name: "Harold Crane",
    ticketNumber: "A02",
    enjoysCoffee: false
  };

  coffeeLoverExtended(customer001); //"Enjoy a cup for free!"
  coffeeLoverExtended(customer002); //"Take a look at our other drinks!"

/*

*/




/*

*/




/*

*/
/*

*/
