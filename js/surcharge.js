
function addWithSurcharge(x,y){


    if(!isNaN(x)){

        if(x <= 10){
            x = x + 1;
            console.log(x + "a-x");
        }
        else if(x > 10 && x <= 20){
            x = x + 2;
            console.log(x + 'b-x');
        }
        else if (x > 20){
            x = x + 3;
            console.log(x + 'c-x');
        }
    }


    if(!isNaN(y)){
        if(y <= 10){
            y = y + 1;
            console.log(y + 'a-y');
        }
        else if(y > 10 && y <= 20){
            y = y + 2;
            console.log(y + 'b-y');
        }
        else if(y > 20){
            y = y + 3;
            console.log(y + 'c-y');
        }
    }

    return x + y;

}

console.log(addWithSurcharge(11, 10));