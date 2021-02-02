// Variables and Data Types
// variables - used to store data
    //strings
    var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nobis explicabo aliquid perferendis quas, nam perspiciatis consequuntur iure velit quasi, necessitatibus ea. Ipsum ipsa illo voluptas nihil, quasi id quis?";
    var singleString = 'lasjdflkaskldjfasdf';
    var backTickString = `lkaslkdflkasdlkflkasdflkalsdf`;

        // Combining variables and string
        // Method 1: String concatenation
        var myName = "chika chika slim shady"
        console.log("Hi, my name is: " + myName);
        var x = 10;
        var result = myName + x;
        console.log(result);

        // Method 2: String interpolation
        var myName = "what?"
        var secondName = "who?"
        console.log(`Hi, my name is: ${myName}. My name is: ${secondName}`)
        // Same key: ` ~
        

    //numbers - javascript doesn't really differentiate between integers
    // and floats/decimals
    var x = 10;
    var y = 15;
    console.log(x + y);
    var half = 0.5;
    

    //bool - true or false
    var isMonday = true;
    var isWeekend = false;

    //arrays - arrays are containers of potentially multiple pieces of data
        // each piece of data lies at a given position, or index
            // indexing starts at 0 -- which means that if there is only one thing, the only element is at array[0]

        // how do we know if an array is empty? array.length would be 0

        // arrays have a .length -- this is a counter of how many elements the array contains
        var numArray = [1,2,3,4,5];
        var stringArray = ["hello", "darkness", "my", "old", "friend"];
        var boolArray = [true, false, false, true, false];

        var randArray = ["hello", false, 10, -5, [1,2,3,4,5]]

        // multi-dimensional arrays
        var matrix = [[1,2,3], [4,5,6], [7,8,9]];
        matrix[1][1];

// Conditionals -- used to determine when to do one thing vs another (or even vs another and vs yet another)
    // key points


    var x = "15";
    if(x == 15){ // == - only compares value (i.e. 10 is considered the same as "10") || === - compares the value AND the data type
        console.log("x is 10");
        // do something
    } else {
        console.log("x is not 10");
        // do something else
    }

    
    // truthiness vs falsiness -- javascript decides that something could be considered true or false
    var myNum = null;
    if(myNum){
        console.log("myNum does exist")
    } else {
        console.log("myNum does not exist")
    }


    var age = 35;

    if(age >= 21) {
        console.log("Have a beer!");
    }
    else if(age >= 18) {
        console.log("You can have a cigarette!");
    }
    else if(age >= 13) {
        console.log("You can go watch a pg 13 movie without parents!");
    }
    else {
        console.log("Go home and watch Paw Patrol");
    }


    var age = 35;

    if(age >= 21) {
        console.log("Have a beer!");
    }
    if(age >= 18) {
        console.log("You can have a cigarette!");
    }
    if(age >= 13) {
        console.log("You can go watch a pg 13 movie without parents!");
    }
    if(age >= 2) {
        console.log("Go home and watch Paw Patrol");
    }

    var birthday = "today";

    console.log("Bartender: Welcome to the bar, would you like a beer?");
    console.log("Me: Sure! I'll have a Guinness");
    console.log("Bartender: Coming right up, but first I need to see some ID");
    console.log("Me: *hands over drivers license*")
    
    if(birthday == "today"){
        console.log("Bartender: Happy birthday! Here's a free shot of Jameson")
    }

    console.log("Bartender: Here's your beer!")




// For Loop vs While Loop
for(var i = 0; i < 10; i++) {
    // do something
}

var userInput = "not thirsty";
while(userInput == "thirsty"){
    console.log("I'll have a beer!");

    // some code to get user input again
}

do {
    console.log("I'll have a beer");

    // some code to get user input again
} while(userInput == "thirsty");


// Person 1: Fiscally responsible
var moneyInAccount = 2;
var costOfBeer = 4
while(moneyInAccount > costOfBeer){
    console.log("I'll have a beer");
    moneyInAccount -= 4;
}

// Person 2: Not so fiscally responsible
var moneyInAccount = 2;
var costOfBeer = 4;

do {
    console.log("I'll have a beer");
    moneyInAccount -= 4;
} while(moneyInAccount > costOfBeer);


// function -- return vs console.log vs neither
    // return - allows you to take the resulting data and do something with it
    // console.log - pretty much just allows you to see that something happened,
        // but you can't take the result of the function to do anything
    // neither - the function still runs, sometimes you just... won't know

    
function buyMeRedbull(money){
    money += " is gone";
}
    
var moneyForRedbull = "my money";
buyMeRedbull(moneyForRedbull);
console.log(moneyForRedbull);


// Math Operations
    // addition
    var x = 10;
    var y = 15;
    var z = x + y;

    //subtraction
    var x = 10;
    var y = 15;
    var z = x - y;

    //multiplication
    var x = 10;
    var y = 15;
    var z = x * y;

    //division
    var x = 10;
    var y = 15;
    var z = x / y;

    //modulus - fancy speak for remainder division. HINT HINT: even vs odd
    var x = 3%2; // this would be 1, because 2 goes into 3 1 time, with 1 left over

    // rounding
    var x = Math.floor(-2.9);
    var y = Math.trunc(-2.9);
    console.log(x);
    console.log(y)

// Shorthand notations
sum = sum + myArray[i]; 
sum += myArray[i];

difference = difference - myArray[i];
difference -= myArray[i]

product = product * 4
product *= 4

quotient = quotient / 3
quotient /= 3
