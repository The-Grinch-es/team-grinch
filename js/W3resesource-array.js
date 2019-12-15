// Write a JavaScript function to check whether an 'input' is an array or not.
var isArray = function(input) {
    if (toString.call(input) === "[object array]")
        return true;
    return false;
};


console.log(isArray('w3resource'));
console.log(isArray([1,2,4,0]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
var first = function(array, n){
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n<0)
        return[];
    return array.slice(0, n);
};


console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// Expected Output :
//     7
//         []
//         [7, 9, 0]
//         [7, 9, 0, -2]
//         []

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :

var last = function(array, n){
        if (array == null)
            return void 0;
        if (n == null)
            return array [array.length - 1];
        return array.slice(Math.max(array.length - n,0));
};
    console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
// Expected Output :
//     -2
//         [9, 0, -2]
//         [7, 9, 0, -2]

var ary = ['first', 'second', 'third', 'fourth', 'fifth'];
alert(ary[0]);
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

