// Challenge 1
var x = 5;
function a(){
    x = 10;
}
console.log(x);
a();
console.log(x);

// Challenge 2
var x = 5;
function a(){
    x = 10;
}
console.log(x);
x = a();
console.log(x);

// Challenge 3
var x = 5;
function a(){
    x = 10;
    return x+5;
}
console.log(x);
x = a();
console.log(x);

