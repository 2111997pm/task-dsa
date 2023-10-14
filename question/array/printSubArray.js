// print this pattern
// 1
// 12
// 123
// 1234
// 12345
// 2
// 23
// 234
// 2345
// 3
// 34
// 345
// 4
// 45
// 5

/*
function printSubArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let subString = "";
    for (let j = i; j < arr.length; j++) {
      subString += arr[j];
      console.log(subString);
    }
  }
}
printSubArray([1, 2, 3, 4, 5]);

*/

// second approach

/*
function printSubArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subString = "";
      for (let k = i; k <= j; k++) {
        subString += arr[k];
      }
      console.log(subString);
    }
  }
}

printSubArray([1, 2, 3, 4, 5]);
*/