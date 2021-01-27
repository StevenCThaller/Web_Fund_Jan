// Challenge 1
function test(arr) {
    var length = arr.length;

    for(var i = 0; i < length; i++) {
        console.log(i);

        for(var j = 0; j < length - i - 1; j++) {
            console.log(j);
        }
    }
}


test([10,5,2]);
test([3,5,2,0]);














// Challenge 2
function something(items){
    var length = items.length;

    for(var i = 0; i < length; i++) {
        for(var j = 0; j < length - 1 - i; j++) {
            if(items[j] > items[j+1]){
                var temp = items[j]; // these 3 lines
                items[j] = items[j+1]; // should look
                items[j+1] = temp; // familiar already
            }
        }
    }

    return items;
}

var a = something([5,2]);
console.log(a);

var b = something([5,2,1]);
console.log(b);
