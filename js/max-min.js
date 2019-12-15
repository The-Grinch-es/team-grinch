function diffMaxMin(nums) {
    return Math.max.apply(Math, nums) - Math.min.apply(Math, nums);
}

// console.log(diffMaxMin());

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));// ➞ 82
// Smallest number is -50, biggest is 32.

console.log(diffMaxMin([44, 32, 86, 19]));// ➞ 67
// Smallest number is 19, biggest is 86.

// math apply  vs ...arr