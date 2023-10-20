/* function validateStr(str) {

  let data = "";
  for (let i = 0; i < str.length; i++) {
    data = str[i] + data
  }
  return data === str;
}

console.log(validateStr("madam"));
*/
/*
function validateStr(str) {
  return str.split("").reverse().join("") === str;
}

console.log(validateStr("madam"));
*/
/*
function validateStr(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

console.log(validateStr("madam"));
*/