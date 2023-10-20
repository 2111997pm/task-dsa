function maxMumWealth(arr) {
  let n = arr.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    let customerWealth = 0;
    for (let j = 0; j < arr[i].length; j++) {
      customerWealth += arr[i][j];
      max = Math.max(customerWealth, max);
    }
  }

  return max;
}

console.log(
  maxMumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maxMumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
