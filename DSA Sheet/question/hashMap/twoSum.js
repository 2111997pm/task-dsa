function twoSum(array, target) {

    let data = new Map();

    for (let i = 0; i < array.length; i++) {
        let value = target - array[i]
        if (data.has(value)) {
            return [data.get(value) + 1, i + 1]
        }
        if (!data.has(array[i])) {
            data.set(array[i], i)
        }
    }

    return -1;

}


console.log(twoSum([4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8], -3));