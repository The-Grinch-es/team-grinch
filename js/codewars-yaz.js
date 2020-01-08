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

/*function iTri(s) { // s indicates the mile marker

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

console.log(iTri(140.6)); // // You're done! Stop running!*/


/*
Given an array of integers, return a new array with each value doubled.

    For example:

    [1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/

/*function maps(x) {
    return x.map(x => x * 2);
}

console.log(maps([1, 2, 3])); // [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])); //[8, 2, 2, 2, 8]
console.log(maps([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]*/

/*
Arrow function: The exact same functions can be expressed as an arrow function with only one line of code. (shorter syntax)

The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.
*/


//TODO:Extract City Facts

/*
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
}));*/

//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!

// function createArray(number) {
//     var newArray = [];
//
//     for (var counter = 1; counter <= number; counter++) {
//         newArray.push(counter);
//     }
//
//     return newArray;
// }

//Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// function uefaEuro2016([t1,t2], [s1,s2]){
//     if (s1==s2) return `At match ${t1} - ${t2}, teams played draw.`
//     if (s2>s1) return `At match ${t1} - ${t2}, ${t2} won!`
//     if (s2<s1) return `At match ${t1} - ${t2}, ${t1} won!`
// }
// console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])); // "At match Germany - Ukraine, Germany won!"
// console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])); // "At match Belgium - Italy, Italy won!"
// console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])); // "At match Portugal - Iceland, teams played draw."



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
todo Description:
No self respecting traveller would leave Indonesia without buying a vest sporting the logo of their national beer. I mean, you don't want to offend anyone do you?? Good, I thought not.
The thing is, although they are sold absolutely everywhere, it's hard to know if you are being ripped off on price. (let's not discuss being ripped off on fashion...).
So you need to practice your haggling skills. As I understand it there are four methods: light haggle, medium haggle, strong haggle and walk away swearing until you get chased down the street and offered one half price.
So, given the price of the vest (price) and the haggling strategy (haggle), return the relevant price with discount applied as follows:
light = 20% medium = 30% heavy = 40% walkandswear = 90%
If the haggle value is anything other than those specified, you will have offended someone, return 'Run!!'
Prices are all in Rupia
*/

// function vestBuy(price, haggle) {
//     if (haggle === "light") return price * 0.8;
//     if (haggle === "medium") return price * 0.7;
//     if (haggle === "heavy") return price * 0.6;
//     if (haggle === "walkandswear") return price * 0.1;
//     return "Run!!";
// }

// console.log(vestBuy(70000, 'light'));
// console.log(vestBuy(30000, 'medium'));
// console.log(vestBuy(800000, 'walkandswear'));

/*
todo Description:
You've purchased a ready-meal from the supermarket.
The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.
Oh no, your microwave is 800W! How long should you cook this for?!
Input
You'll be given 4 arguments:
1. needed power
The power of the needed microwave.
Example: "600W"
2. minutes
The number of minutes shown on the package.
Example: 4
3. seconds
The number of seconds shown on the package.
Example: 20
4. power
The power of your microwave.
Example: "800W"
Output
The amount of time you should cook the meal for formatted as a string.
Example: "3 minutes 15 seconds"
Note: the result should be rounded up.
59.2 sec  -->  60 sec  -->  return "1 minute 0 seconds"
All comments/feedback/translations appreciated.
*/

// function cookingTime(neededPower, minutes, seconds, power) {
//     var time = Math.ceil(
//         ((60 * minutes + seconds) * parseInt(neededPower)) / parseInt(power)
//     );
//     return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;
// }

// console.log(cookingTime("600W", 4, 20, "800W"));
// console.log(cookingTime("800W", 3, 0, "1200W"));
// console.log(cookingTime("100W", 8, 45, "50W"));
// console.log(cookingTime("7500W", 0, 5, "600W"));
// console.log(cookingTime("450W", 3, 25, "950W"));
// console.log(cookingTime("21W", 64, 88, "25W"));
// console.log(cookingTime("83W", 61, 80, "26W"));
// console.log(cookingTime("38W", 95, 22, "12W"));


