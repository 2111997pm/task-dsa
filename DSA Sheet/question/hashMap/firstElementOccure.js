function firstOccuringElement(arr, k) {
    let data = new Map()

    for (let i = 0; i < arr.length; i++) {

        if (data.has(arr[i])) {
            data.set(arr[i], data.get(arr[i]) + 1)
        } else {
            data.set(arr[i], 1)
        }

        if (data.get(arr[i]) === k) {
            return arr[i]
        }
    }
    return -1
}

console.log(firstOccuringElement([1, 7, 4, 3, 4, 7, 8, 7], 3));