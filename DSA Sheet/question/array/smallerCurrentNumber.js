// # 1365

// const smallerNumbersThanCurrent = function (nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let ans = 0;

//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         ans += 1;
//       }
//     }
//     result.push(ans);
//   }

//   return result;
// };

const smallerNumbersThanCurrent = function (nums) {
  const sortedArray = [...nums].sort((a, b) => a - b);

  const value = new Map();

  for (let i = 0; i < sortedArray.length; i++) {
    if (!value.has(sortedArray[i])) {
      value.set(sortedArray[i], i);
    }
  }

  return nums.map((num) => value.get(num));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
