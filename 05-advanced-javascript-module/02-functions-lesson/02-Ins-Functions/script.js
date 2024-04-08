// Functions are reusable blocks of code that perform a specific task
// This is a function declaration 
function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
}

// This is a function expression
var expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
};

// Functions must be called to execute
declareHello(); 
expressHello();

// Functions can be called again to make the block of code execute again
declareHello();

// Functions can return values with the use of the 'return' keyword
function returnAValueFromTheFunction() { 
  var result = 5 + 3;
  return result;
}

// The 'return' keyword can be used to stop the execution of a function
function checkBooleanVariable() {
  var x = true;

  if(x === true) {
    return;
  } 

  console.log("Hello, I am a function with a return statement in an if statement.");
  console.log("------------------------------------------------------------------");
}

// Variables to hold a return value from a function can be created. Then the variable holding the return value can be utilized.
var additionResult = returnAValueFromTheFunction();
console.log("The result that is returned from the returnValueFromTheFunction() call is: " + additionResult);

// Make note that the call to the checkBooleanVariable() function does not print any console logs because the boolean variable check executes the return statement and the function execution
//      stops before the console logs are executed.
console.log("Invoking the checkBooleanVariable() function and expecting no logs to print.")
checkBooleanVariable();
