function findMissingElement(arr) {
    const n = arr.length;
    const commonDifference = (arr[n - 1] - arr[0]) / n;
    console.log(commonDifference);

    for (let i = 0; i < n - 1; i++) {
        if (arr[i + 1] - arr[i] !== commonDifference) {
            return arr[i] + commonDifference;
        }
    }

    return -1;
}

const arr = [1, 6, 11, 16, 21, 31, 36];
const missingElement = findMissingElement(arr);
console.log("Missing element:", missingElement);