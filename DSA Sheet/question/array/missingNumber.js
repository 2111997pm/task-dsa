function findMissing(arr) {
    let n = arr.length + 1;

    let sum = (n * (n + 1)) / 2
    let actualsum = 0;

    for (let i = 0; i < arr.length; i++) {

        actualsum += arr[i]

    }
    return sum - actualsum

}


console.log(findMissing([1, 4, 3]));