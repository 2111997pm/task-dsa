/*
function rotateArray(arr, k) {
  let n = arr.length;

  for (let i = 0; i < k; i++) {
    let last = arr[n - 1];
    console.log(last);
    for(let j=n-1; j>=0; j--){
        arr[j] = arr[j-1]
    }
    arr[0] = last;
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([-1,-100,3,99], 2));
*/

function rotateArray(nums, k) {
    const n = nums.length; // Get the length of the array
  
    for (let i = 0; i < k; i++) { // Outer loop runs k times for k steps of rotation
      const lastElement = nums.pop(); // Pop the last element
  
      nums.unshift(lastElement); // Insert the popped element at the beginning
    }
    return nums
  }
  console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([-1,-100,3,99], 2));
