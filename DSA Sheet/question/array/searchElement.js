
function searchElement(arr, find) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            return i;
        }
    }
}

console.log(searchElement([1, 2, 3, 4], 4));