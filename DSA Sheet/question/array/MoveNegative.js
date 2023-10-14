function moveNegative(arr) {
    let positiveArray = []
    let negativeArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArray.push(arr[i])
        } else {
            negativeArray.push(arr[i])
        }
    }
    return [...positiveArray, ...negativeArray]
}
console.log(moveNegative([1, -1, 3, 2, -7, -5, 11, 6]));