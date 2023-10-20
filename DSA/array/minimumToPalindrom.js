function findMinimumToPalindrom(str) {
  let count = 0;
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      count++;
      right--;
    }
  }
  return count;
}

console.log(findMinimumToPalindrom("abcd"));
console.log(findMinimumToPalindrom("aa"));
