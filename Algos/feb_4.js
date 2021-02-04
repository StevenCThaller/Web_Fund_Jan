// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

// Challenge 1
// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne() {
    return Math.floor(Math.random()*6)+1;
}

// Hint: You might want to look up Javascripts Math.random() function!

// Challenge 2
// Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' 
// times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print 
// the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”
function playFives(num){
    for(var i = 0; i < num; i++) {
        var result = rollOne();
        console.log(result);
        if(result === 5) {
            console.log("That's good luck!");
        }
    }
}
// Challenge 3
// Third, create a new function named playStatistics(), which should call rollOne() eight times 
// (but not print anything after each call). After the last of these eight calls, it should print 
// out the lowest and highest values that it received from rollOne, among those eight calls.

function playStatistics(){
    var min = 6;
    var max = 1;
    for(var i = 0; i < 8; i++) {
        var result = rollOne();
        if(result < min){
            min = result;
        }
        if(result > max){
            max = result;
        }
    }
    console.log(`Min: ${min}`);
    console.log(`Max: ${max}`);
}
