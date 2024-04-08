// WRITE YOUR CODE HERE
var names = ['Sebastian', 'Phillip', 'Angelica', 'Tom', 'Clive','Gary'];

console.log(names.length);

console.log('Welcome to the Class: ' + names[0]);
console.log("Welcome to the Class: " + names[1]);
console.log("Welcome to the Class: " + names[2]);
console.log("Welcome to the Class: " + names[3]);
console.log("Welcome to the Class: " + names[4]);

names[0] = 'Bob'

if (names[0] != 'Sebastian') {
    console.log(names[0] + ' is in Class');
}

console.log(names[names.length - 1]);