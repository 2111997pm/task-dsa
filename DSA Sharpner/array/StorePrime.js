// store the Prime Number in array

function StorePrime(n) {
  let array = [];
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  return array;
}
console.log(StorePrime(10));
