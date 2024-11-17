// # 268

const missingNumber = function (nums) {
  const expectedsum = Array.from(
    {length: nums.length + 1 },
    (_, i) => i
  ).reduce((a, b) => a + b, 0);
  const actualSum = nums.reduce((a, b) => a + b, 0);

  return expectedsum - actualSum;
};

console.log(missingNumber([1,0, 2, 4]));
