//WRITE YOUR CODE BELOW
var size = ["small", "medium", "large"];
var milk = ["whole", "skimmed", "soy"];

var menu = {
  latte: {
    price: 3.5,
    iced: false,
    sugar: true,
    size: size,
    milk: milk,
  },

  cappuccino: {
    price: 4.5,
    iced: false,
    sugar: true,
    size: size,
    milk: milk,
  },

  frappe: {
    price: 5.5,
    iced: true,
    sugar: true,
    size: size,
    milk: milk,
  },
};



console.log('Price of a Cappuccino is: £' + menu.cappuccino.price);
console.log('Price of Latte and a Frappe is: £' + (menu.latte.price + menu.frappe.price));
console.log(Object.values(menu.frappe.size));
console.log(milk, size);