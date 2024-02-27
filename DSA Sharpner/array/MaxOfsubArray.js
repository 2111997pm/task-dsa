// first approach
/*
function maxSubArray(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = i; j < arr.length; j++) {
      total += arr[j];
      if (max < total) {
        max = total;
      }
    }
  }
  return max;
}

console.log(maxSubArray([5, 2, -4, -5, 3, -1, 2, 3, 1]));
*/
// second approach with Array index;

/*
function maxSubArray(arr) {
    let max = 0;
    let start;
    let end;
  
    for (let i = 0; i < arr.length; i++) {
      let total = 0;
      for (let j = i; j < arr.length; j++) {
        total += arr[j];
        if (max < total) {
          max = total;
          start = i;
          end =j
        }
      }
    }
    return {
        max:max,
        arr : arr.slice(start,end+1)
    };
  }
  
  console.log(maxSubArray([5, 2, -4, -5, 3, -1, 2, 3, 1]));

  */

// third Approach Dynamic Programming;
/*
function maxSubArray(arr) {
  let sum = 0;

  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

console.log(maxSubArray([5, 2, -4, -5, 3, -1, 2, 3, 1]));
*/
// fourth approach Dynampic Program

function maxSubArray(arr) {
  let ans = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);

    // console.log(i+ " => " +arr[i]);
    ans = Math.max(ans, arr[i]);
  }

  return ans;
}

console.log(maxSubArray([5, 2, -4, -5, 3, -1, 2, 3, 1]));
