// Warm up: print all the values in an array using a for loop
// Example:
// var arr = [5,8,29,17,3]
// console should read:
// 5
// 8
// 29
// 17
// 3
var arr = [5,8,29,17,3];

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// CHALLENGE ONE: 
// Given an array, print out the values in the array as well as 
// the sum of all the values

// var myArray = [4,10,6,2,9]
// Console should look something like this:
// value: 4, sum: 4
// value: 10, sum: 14
// value: 6, sum: 20
// value: 2, sum: 22
// value: 9, sum: 31

var myArray = [4,10,6,2,9];
var sum = 0;
for(var i = 0; i < myArray.length; i++){
    sum += myArray[i];
    console.log("value: " + myArray[i] + ", sum: " + sum);
}

// Hint: you can console.log strings and values together using 
// syntax like this: 
// console.log("Some words " + myVal + " some more words " + anotherVal) 
// Be mindful of where you ""s are located! 

// CHALLENGE 2:
// Given an array, multiply each value in the array by its index position and 
// console.log the modified array

// var someArray = [2,5,14,3,7]
// You should console.log an array that looks like this: [0,5,28,9,28]
// Because: 
// 2 * 0 = 0 
// 5 * 1 = 5
// 14 * 2 = 28
// 3 * 3 = 9
// 7 * 4 = 28

var someArray = [2,5,14,3,7];
for(var i = 0; i < someArray.length; i++) {
    someArray[i] = someArray[i] * i;
}
console.log(someArray);

// Hint, think about when someArray[someIndexValue] is representing the VALUE 
// or the LOCATION -- how can we SET a position to a certain value USING the 
// value that is already there?