//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: 'latte',
    sugars: 2,
    ready: true,
}

var menu = { 
   cappucino: 3.49,
   latte: 3.99,
   americano: 2.99
}

console.log(Object.keys(menu));
console.log(Object.values(menu));
console.log(Object.entries(menu));

function totalCost(menu) {
    var total = 0;
    var prices = Object.values(menu);
    for(let i = 0; i < prices.length; i++) {
        total += prices[i];
        console.log(total);
    }

    return total;
}

console.log(totalCost(menu));