function runnimSum(n) {
  let array = [];
  let sum = 0;

  for (let element of n) {
    sum += element;
    array.push(sum);
  }
  return array;
}

console.log(runnimSum([1, 2, 3, 4]));
