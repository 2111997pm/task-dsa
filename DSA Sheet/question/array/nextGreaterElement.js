function nextGreaterElement(arr) {
    let maxvalue = -1

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = maxvalue;
        maxvalue = Math.max(maxvalue, temp)
    }

    return arr;

}
console.log(nextGreaterElement([2, 3, 1, 9]));

// output = 9 9 9 -1

