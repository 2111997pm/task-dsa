function isSharpee(n) {
  let num = n.toString();
  let sum = 0;
  for (let ele of num) {
    sum += parseInt(ele);
  }
  return sum % 5 === 0;
}

function findSharpee(n) {
  let array = [];

  for (let i = 1; array.length < n; i++) {
    if (isSharpee(i)) {
      array.push(i);
    }
  }
  return array;
}

console.log(findSharpee(5));
