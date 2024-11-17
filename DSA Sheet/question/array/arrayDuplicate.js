// # 217


// const containsDuplicate = function (nums) {
//   const setValue = new Set([...nums]);

//   if (setValue.size === nums.length) {
//     return false;
//   }

//   return true;
// };

const containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};


console.log(containsDuplicate([1, 2, 3, 1]));
