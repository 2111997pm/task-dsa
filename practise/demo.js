/*
function slidingWindow(nums, k) {
  let result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];

    for (let j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    result.push(max);
  }

  return result;
}

console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
*/

// var maxSlidingWindow = function (nums, k) {
//   const result = [];
//   const deque = [];

//   for (let i = 0; i < nums.length; i++) {
  
//     while (deque.length > 0 && deque[0] < i - k + 1) {
//       deque.shift();
//     }
//     while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
//       deque.pop();
//     }
//     deque.push(i);
//     if (i >= k - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }

//   return result;
// };

// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));


for(let i=1; i<=5; i++){
  for(let j=1; j<=5; j++){
    console.log('jhi');
  }
}