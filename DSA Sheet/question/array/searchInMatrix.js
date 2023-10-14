function searchInMatrix(arr, target) {
    let row = arr.length;
    let col = arr[0].length;
    let left = 0;
    let right = row * col - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let midValue = arr[Math.floor(mid / col)][mid % col]
        console.log(midValue);
        if (midValue === target) {
            return true;
        } else if (midValue > target) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }

    return false;

}
console.log(searchInMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));

/*
[[1, 3,5, 7],
[10,11,16,20],
[23,30,34,60]]
*/