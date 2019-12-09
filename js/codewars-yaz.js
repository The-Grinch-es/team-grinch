"use strict";

//     Your task is to take a distance that an athlete is through the race, and return one of the following:
//
//     If the distance is zero, return 'Starting Line... Good Luck!'.
//
//     If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.
//
//     If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.
//
//     If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.
//
//     If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.
//
//     Finally, if the athlete has completed te distance, return "You're done! Stop running!".
//
//     All distance should be calculated to two decimal places.


/*
swim - 2.4
bike - 112
run - 26.2
 */
// var totalMiles = 2.4 + 112 + 26.2;

function iTri(s) {

    var miles = 140.6;

    if (s === 0) return 'Starting Line... Good Luck!';

    if (s <= 2.4)
        return ("Swim: " + (miles.toFixed(2)-s) + " to go!");

    if (s <= 114.4)
        return ("Bike: " + (miles.toFixed(2)-s) + " to go!");

    if (s <= 130)
        return ("Run: " + (miles.toFixed(2)-s) + " to go!");

    if (s < miles) return ("Run: Nearly there!");
    return "You're done! Stop running!";
}


console.log(iTri(0));
console.log(iTri(2));
console.log(iTri(114));
console.log(iTri(127));
console.log(iTri(131));
console.log(iTri(140.6));