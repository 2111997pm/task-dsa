
function countPrime(n) {
    let arr = [];
    function isPrime(nums) {
        for (let i = 0; i < arr.length && arr[i] <= Math.sqrt(nums); i++) {
            if (nums % arr[i] === 0) {
                return false
            }
        }
        return true;
    }

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            arr.push(i)
        }
    }
    return arr;

}
console.log(countPrime(10));