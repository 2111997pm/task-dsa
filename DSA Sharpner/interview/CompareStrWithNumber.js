function compareStrWithNumber(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else if (j > 0 && !isNaN(str2[j])) {
      let count = 0;
      while (j < str2.length && !isNaN(str2[j])) {
        count = count * 10 + parseInt(str2[j], 10);
        j++;
      }
      i += count;
    } else {
      return false;
    }
  }

  return str1.length === i && str2.length === j;
}

console.log(compareStrWithNumber("SHARPENER", "S3P3R"));
console.log(compareStrWithNumber("DFS", "D1D"));
