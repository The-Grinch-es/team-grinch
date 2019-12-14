


function mysteryFunc (x){

    var newX = (""+x).split('');
    var sum = 1;
    for(var i = 0; i <= newX.length -1; i++){
        sum *= (newX[i]);
    }

    return sum;
}

console.log(mysteryFunc(152));
console.log(mysteryFunc(228));
console.log(mysteryFunc(124));
