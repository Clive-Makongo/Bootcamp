function addOneAndTwo() {
  var sum = 1 + 2;
  return sum;
}

var subtractTwentyAndTen = function() {
  var difference = 20 - 10;
  return difference;
}

var side = 54;

function areaOfASquare() {
  var area = side * side;
  return area;
}

var additionResult = addOneAndTwo();
console.log("The sum is: " + additionResult);

var differenceResult = subtractTwentyAndTen();
console.log("The difference is: " + differenceResult);

var areaResult = areaOfASquare();
console.log("The area for a square with a side value of  " + side + " is " + areaResult);
