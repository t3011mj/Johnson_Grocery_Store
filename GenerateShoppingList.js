
/* var groceryItems =  [
   {item: 1, name: "Banana", category: "Fruit" , description: "Fruit", price: 2.00},
   {item: 2, name: "Chicken", category: "Meat" , description: "Meat",  price: 3.00}
]; */

var groceryItems =   ["Bananas", "Chicken","Bread","Milk", "Cereal"];
var groceryPrices =  ["$2.00",   "$8.61",  "$2.30","$1.00","$3.50"];

  
  var total = 0;  // Initialize total
  var newUserTotal = 0;
  
  // Read elements groceryList (array), foodTotal and Button from HTML file
  var groceryList       = document.getElementById("groceryList");
  var groceryPriceList  = document.getElementById("groceryPriceList");
  var foodTotal     = document.getElementById("foodTotal");
  var button        = document.getElementById("button");
  
  // Loop through arrays and build strings
   groceryItems.forEach(function(groceryItems) {
    /*  console.log("item = " + groceryItems); */ 
    var newItem = document.createElement("li");
    newItem.innerText += groceryItems;
    /* console.log(newItem); */ 
    groceryList.appendChild(newItem);
  }); 

  groceryPrices.forEach(function(groceryPrices) {
    /* console.log("1 price = " + groceryPrices); */
    var stringPrice =  groceryPrices.valueOf();
    var doublenumber = Number(stringPrice.replace(/[^0-9\.]+/g,""));
    /* console.log("doublenumber = " + doublenumber); */
    var newPrice = document.createElement("li");
    newPrice.innerText += groceryPrices; 
    groceryPriceList.appendChild(newPrice);
    total += doublenumber;
    /* console.log("original total = " + total); */
    });

  button.addEventListener ("click", function() {
    var userFood  = document.getElementById("food").value;
    var userPrice = document.getElementById("price").value;
    /* console.log("userFood = " + userFood); */
    /* console.log("userPrice = " + userPrice); */
    var newdoublenumber = Number(userPrice.replace(/[^0-9\.]+/g,""));
    var newUserFood = document.createElement("li");
    newUserFood.innerText += userFood;

    var newFoodPrice = document.createElement("li");
    newFoodPrice.innerText += "$" + userPrice;

    groceryList.appendChild(newUserFood);
    groceryPriceList.appendChild(newFoodPrice);

    newUserTotal = +total + newdoublenumber;
    total = newUserTotal;
    foodTotal.innerText = "Grocery List total is: " + total;
    /* console.log(newUserTotal); */
    }); 



foodTotal.innerText = "Grocery List total is: $" + total;

  