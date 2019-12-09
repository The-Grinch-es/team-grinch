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

function iTri(s){
    var distance = 2.4 + 112 + 26.2;
    if (s === 0) return 'Starting Line... Good Luck!';
    if (s <= 2.4)
        return ("Swim: " + distance.toFixed(2) + " to go!");
    if (s <= 114.4)
        return ("Bike: " + distance.toFixed(2) + " to go!");
    if (s <= 127)
        return ("Run: " + distance.toFixed(2) + " to go!");
    if (s < distance) return ("Run: Almost done!");
    return "You're done! Stop running!";
}

console.log(iTri(0));
console.log(iTri(2));
console.log(iTri(114));
console.log(iTri(127));
console.log(iTri(127));