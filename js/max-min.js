function diffMaxMin(nums) {
    return Math.max.apply(Math, nums) - Math.min.apply(Math, nums);
}

console.log(diffMaxMin());