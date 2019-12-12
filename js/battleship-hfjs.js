"use strict"


// var randomLoc = Math.floor(Math.random())*5;
var location1 = "1"
var location2 = "2"
var location3 = "3"


var hits = 0;
var guesses = 0;
var isSunk = false;

console.log(prompt("Are you ready to play?"));


while (isSunk === false){
 var guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
 if(guess < 0 || guess >6){
        alert("Please enter a valid number!");
    }else {
        guesses = guesses + 1;

        if (guess === location1 || guess === location2 || guess === location3){
            alert("HIT");
            hits = hits +1;
            if (hits === 3){
                isSunk = true;
                alert("You sunk my battleship");
            }
        }else {
            alert("MISS!");
        }

    }
}
let stats = "You took" +guesses+ "guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);
alert(stats);
