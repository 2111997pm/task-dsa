function rotateArray(arr) {
    let array = []
    let last = arr.length - 1
    for (let i = 0; i < arr.length - 1; i++) {
        array[i + 1] = arr[i]
    }
    array[0] = arr[last]

    return array;



}

console.log(rotateArray([1, 2, 3, 4, 5]));
// output [5,1,2,3,4]