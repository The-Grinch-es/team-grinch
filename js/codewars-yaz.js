"use strict";
/*
    Your task is to take a distance that an athlete is through the race, and return one of the following:

    If the distance is zero, return 'Starting Line... Good Luck!'.

    If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

    If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

    If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.

    If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

    Finally, if the athlete has completed te distance, return "You're done! Stop running!".

    All distance should be calculated to two decimal places.
*/


/*
swim - 2.4
bike - 112
run - 26.2
 */

function iTri(s) { // s indicates the mile marker

    var miles = 140.6;

    if (s === 0) return 'Starting Line... Good Luck!';

    if (s <= 2.4) // Swim miles
        return ("Swim: " + (miles - s).toFixed(2) + " to go!");

    if (s <= 114.4) // Swim & Bike miles altogether
        return ("Bike: " + (miles - s).toFixed(2) + " to go!");

    if (s <= 130.6) // 10 miles left
        return ("Run: " + (miles - s).toFixed(2) + " to go!");

    if (s < miles) return ("Run: Nearly there!"); // less than 10 miles

    return "You're done! Stop running!";
}

console.log(iTri(0)); // //Starting Line... Good Luck!
console.log("----------");

console.log(iTri(2)); // // Swim: 138.60 to go!
console.log("----------");

console.log(iTri(113)); // // Bike: 27.60 to go!
console.log("----------");

console.log(iTri(127)); // // Run: 13.60 to go!
console.log("----------");

console.log(iTri(131)); // Run: Nearly there!
console.log("----------");

console.log(iTri(140.6)); // // You're done! Stop running!


/*
Given an array of integers, return a new array with each value doubled.

    For example:

    [1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/

// function maps(x) {
//     return x.map(x => x * 2);
// }
//
// console.log(maps([1, 2, 3])); // [2, 4, 6]
// console.log(maps([4, 1, 1, 1, 4])); //[8, 2, 2, 2, 8]
// console.log(maps([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]

/*
Arrow function: The exact same functions can be expressed as an arrow function with only one line of code. (shorter syntax)

The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.
*/


//TODO:Extract City Facts

function cityFacts(city) {
    return city.name + " has a population of "+ city.population + " and is situated in "+ city.continent;
}

console.log(cityFacts({
    name: 'Manila',
    population: '1,780,148',
    continent: 'Asia'
}));
console.log(cityFacts({
    name: 'Melbourne',
    population: '4,936,349',
    continent: 'Australia'
}));
console.log(cityFacts({
    name: 'Kampala',
    population: '1,507,080',
    continent: 'Africa'
}));
console.log(cityFacts({
    name: 'Buenos Aires',
    population: '2,891,082',
    continent: 'South America'
}));
console.log(cityFacts({
    name: 'Vancouver',
    population: '631,486',
    continent: 'North America'
}));
console.log(cityFacts({
    name: 'Berlin',
    population: '3,748,148',
    continent: 'Europe'
}));