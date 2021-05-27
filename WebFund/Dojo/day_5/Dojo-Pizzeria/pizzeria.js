function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("stuffed crust", "marinara", "mozarella", ["chicken", "jalapenos", "olives", "mushrooms"])
var p4 = pizzaOven("thin crust", "barbeque", ["mozarella", "parmasan"], ["chicken", "onions"])
console.log(p4)

//create a function randomPizza
//randomPizza creates a pizza at random
//toppings will need to be selected at random
//for each pizza type, i need an array of toppings to be selected at random
//matt.random will select an array position for me between 1-arr.length
//pizza type will be an array itself to set starting points
function randomPizza(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    var x = Math.floor(Math.random()*crustType.length);
    var y = Math.floor(Math.random()*sauceType.length);
    var z = Math.floor(Math.random()*cheeses.length);
    var w = Math.floor(Math.random()*toppings.length);
    pizza.crustType = crustType[x];
    pizza.sauceType = sauceType[y];
    pizza.cheeses = cheeses[z];
    pizza.toppings = toppings[w];
    return pizza;
}
var radompizza = randomPizza(["deep dish", "hand tossed", "stuffed crust", "thin crust"], ["traditional", "marinara", "barbeque", "white sauce"],["mozzarella", "parmasan"], ["chicken", "pepperoni", "olives", "bacon", "ham"]);
console.log(radompizza)
