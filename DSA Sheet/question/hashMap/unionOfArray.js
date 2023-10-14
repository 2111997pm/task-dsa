function unionOfTwoArray(array1, arrray2) {
    let data = new Set();

    for (let ele of array1) {
        data.add(ele)
    }

    for (let ele of arrray2) {
        data.add(ele)
    }
    return data.size;
}

console.log(unionOfTwoArray([1, 2, 3, 4, 5], [1, 2, 3]));