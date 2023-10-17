/*
function sumOfOddLengthArray(arr) {
  let result = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let end = i + 1;
    let start = n - i;
    let total = start * end;
    let odd = Math.floor(total / 2);
    if (total % 2 !== 0) {
      odd++;
    }
    result += odd * arr[i];
  }

  return result;
}
console.log(sumOfOddLengthArray([1, 4, 2, 5, 3]));
*/

function sumOfOddLengthArray(arr) {
  let result = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let total = 0;
    for (let j = i; j < n; j++) {
      total += arr[j];
      if ((j - i) % 2 === 0) {
        result += total;
      }
    }
  }

  return result;
}
console.log(sumOfOddLengthArray([1, 4, 2, 5, 3]));
/*
var sumOddLengthSubarrays = function(arr) {
     let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j += 2) {
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
    }
  }
  
  return sum;
    
};
*/
