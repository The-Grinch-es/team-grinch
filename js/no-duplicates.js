// function sortArray(arr){
//     var newArr = (""+arr).split(',');
//     console.log(newArr);
//     for (var i = 0; i <= newArr.length; i++){
//         if (newArr[i] === newArr.indexOf[i])
//             console.log(i);
//         return i;
//
//     }
//
// }
// console.log(sortArray([1, 3, 3, 5, 5, 5]));


function removeDuplicates(arr) {
  let notDups = [];
  var test = [];
  var test2 = [];
  arr.forEach(function(i) {
      test.push(i);
      console.log("What " + notDups);
      test2.push(notDups[i]);
    if(!notDups[i]) {
        notDups[i] = true;
    }
  });
  console.log("Test: ", test);
    console.log("Test2: ", test2);
  console.log("Array before: " + notDups);
    console.log("Array after: " + Object.keys(notDups));
  return Object.keys(notDups);
}
console.log(removeDuplicates([3, 3, 5, 5, 5, 7, 8, 8, 8, 8, 8, 8, 7, 1, 3]));