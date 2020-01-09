// Create a function that returns a base 2 (binary) represetation of a base 10 (decimal) string number. To convert is
// simple: ((2) means base 2 and (10) means base 10) 010101001(2) = 1 + 8 + 32 + 128.
//
// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the
// value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// function binary(decimal) {
//     if (decimal <1024 && decimal >= 0){
//         return parseInt(decimal, 10).toString(2);
//     }
// }

// Given a string of letters, how many capital letters are there?
//
//     Examples
//     capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6
//
// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14
//
// capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0

// function capitalLetters(txt) {
//     var count = 0;
//     for(var i =0; i<txt.length;i++)
//     {
//         if(txt[i] === txt[i].toUpperCase())
//         {
//             count ++
//         }
//     }
//     return count
// }

// Write a function that returns true if k^k == n for input (n, k).
//
//                                                        Examples
//     kToK(4, 2) ➞ true
//
// kToK(387420489, 9) ➞ true
// // 9^9 == 387420489
//
// kToK(3124, 5) ➞ false
//
// kToK(17, 3) ➞ false
// function kToK(n, k) {
//     return Math.pow(k,k) === n
// }
//
// // Create a function to concatenate two integer arrays.
// function concat(arr1, arr2) {
//     return arr1.concat(arr2);
// }

    // Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

// Create a function that checks if the argument is an integer or a string. Return int if it's an integer and
// str if it's a string.

function intOrStr(param) {
    if (typeof param === num){
        return "int";}
    else if(typeof param === "string"){
        return "str";
    }
}


// Imagine you run a website that presents users with different
//     coding challenges in levels Easy, Medium, and Hard, where users
// get points for completing challenges. An Easy challenge is worth 5
// points, a Medium challenge is worth 10 points, and a Hard challenge
// is worth 20 points.
//
//     Create a function that takes in the number of each challenge level
// a user has played and calculates the user's total number of points.
// Keep in mind that a user cannot complete negative challenges, so the
// function should return the string "invalid" if any of the passed
// parameters are negative.



function scoreCalculator(easy, med, hard) {
    var totalEasyPoints = (easy*5);
    var totalMedPoints = (med*10);
    var totalHardPoints = (hard*20);
    var totalNumberOfPoints = totalEasyPoints + totalMedPoints + totalHardPoints;
    if (easy<0||med<0||hard<0){
        return "invalid";
    }else{
        return (totalNumberOfPoints);
    }}

console.log(scoreCalculator()

// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided
// to get 24. If none of the operations can give 24, return null.
//
//     Examples
// operation(15, 9) ➞ "added"
//
// operation(26, 2) ➞ "subtracted"
//
// operation(11, 11) ➞ null
// Notes
// Only integers are used as test input.
//     Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
function operation(num1, num2) {
    if(num1 + num2 == 24){
        return "added";
    }
    else if(num1 - num2 == 24){
        return "subtracted";
    }
    else if(num1 * num2 == 24){
        return "multiplied";
    }
    else if(num1/num2 == 24){
        return "divided";
    }
    else
        return null;

}
// Write two functions:


//
//     toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
//     Examples
function toInt(str) {
    return parseInt(str)
}

function toStr(int) {
    return int.toString()

}

// toInt("77") ➞ 77
//
// toInt("532") ➞ 532
//
// toStr(77) ➞ "77"
//
// toStr(532) ➞ "532"

// You're given a string of words. You need to find the word "Nemo", and return a string like this:' +
// ' "I found Nemo at [the order of the word you find nemo]!".
//
// If you can't find Nemo, return "I can't find Nemo :(".
//
// Examples
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
//
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
//
// findNemo("I Nemo am") ➞ "I found Nemo at 2!"
// Notes
// ! , ? . are always separated from the last word.
//     Nemo will always look like Nemo, and not NeMo or other capital variations.
//     Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
//     If there are multiple Nemo's in the sentence, only return for the first one.
// function findNemo(sentance) {
//     let str = sentance.split(' ');
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == "Nemo") return "I found Nemo at " + (i+1) + "!";
//     }
//
//     return "I can\'t find Nemo :(";
// }
//
// Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute
// value of each element.
//
//     Examples
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
//
// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
//
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30
//
// getAbsSum([-1]) ➞ 1
// Notes
// The term "absolute value" means to remove any negative sign in front of a number,
// and to think of all numbers as positive (or zero).

function getAbsSum(arr){
    var sum = 0;
    for (var i=0; i<arr.length;i++) {
        sum += Math.abs(arr[i]);
    }
    return sum
    }
// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
//
//     Examples
// factorial(3) ➞ 6
//
// factorial(5) ➞ 120
//
// factorial(13) ➞ 6227020800
// Notes
// Assume all inputs are greater than or equal to 0.
function factorial(int) {
    if (int < 0)
        return -1;
    else if (int == 0)
        return 1;
    else {
        return (int * factorial(int - 1));
    }
}

// Create a function that takes in an array of numbers and returns the sum of its cubes.
//
//     Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//
// sumOfCubes([3, 4, 5]) ➞ 216
//
// sumOfCubes([2]) ➞ 8
//
// sumOfCubes([]) ➞ 0
// Notes
// If given an empty array, return 0.

function sumOfCubes(nums) {
    var sum=0;
    var l = nums.length;
    for(i=0; i<l; i++){
        sum += Math.pow(nums[i], 3);
    }
    return sum;
}