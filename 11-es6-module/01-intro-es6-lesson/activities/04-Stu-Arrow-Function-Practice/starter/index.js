// // 1. funnyCase makes each letter in a string the opposite case as the one before
// var funnyCase = (string) => {
//   var newString = "";
//   for (var i = 0; i < string.length; i++) {
//     if (i % 2 === 0) newString += string[i].toLowerCase();
//     else newString += string[i].toUpperCase();
//   }
//   return newString;
// };

// // Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
// console.log(funnyCase("You can't just do whatever you want all the time!"));
// console.log("====================")

// // --------------------------------------------------------------------------

// 2. Map lets you loop over an array and return a new array with the same length.  You can use this to modify the elements inside the array, like this:
// var map = (arr, cb) => {
//   var result = [];
//   for (var index = 0; index < arr.length; index++) {
//     var currentElement = arr[index];
//     result.push(cb(currentElement, index));
//   }
//   return result;
// };




// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var doubled = map(numbers, (element) => {
//   return element * 2;
// });





// // Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
// console.log(doubled);
// //note that the original array is unchanged:
// console.log(numbers);
// console.log("====================")

// // --------------------------------------------------------------------------

// 3. filter lets you loop over and return a new array with some elements filtered out:
// var filter = (arr, cb) => {
//   var result = [];
//   for (var index = 0; index < arr.length; index++) {
//     var currentElement = arr[index];
//     if (cb(currentElement, index)) {
//       result.push(currentElement);
//     }
//   }
//   return result;
// };

// var evenNumbers = filter(numbers, (currentElement) => {
//   return currentElement % 2 === 0;
// });

// // Prints `[ 2, 4, 6, 8, 10 ]`
// console.log(evenNumbers);
// //note that the original array is unchanged:
// console.log(numbers);
// console.log("====================")
// // --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your netflix queue
var netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club"
  ],
  watchMovie: () => {
    netflixQueue.queue.pop();
  },
  addMovie: (movie) => {
    netflixQueue.queue.unshift(movie);
  },
  printQueue: () => {
    //console.log(this.length);
    var list = "";
    for (var i = netflixQueue.queue.length - 1; i >= 0; i--) {
      var currentMovie = netflixQueue.queue[i];
      list += netflixQueue.queue.length - i + ". " + currentMovie + "\n";
    }
    console.log(list);
  }
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("\nWatched a movie!\n");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
