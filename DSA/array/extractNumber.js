
function extractNumber(str) {
  let number = [];
  let ans = "";
  for (let element of str) {
    if (!isNaN(element)) {
      ans = ans + element;
    } else if (ans !== "") {
      number.push(parseInt(ans, 10));
      ans = "";
    }
  }

  return number;
}

console.log(extractNumber("abc334v44d"));
console.log(extractNumber("abv345fjjf123tyir45jf6th"));



/*
var extract_number = function (str) {
  const numbers = str.match(/\d+/g);
  if (numbers === null) {
    return [];
  }
  return numbers.map(Number);
};
console.log(extract_number("abc334v44d"));
*/