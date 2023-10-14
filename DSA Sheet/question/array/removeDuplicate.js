function removeDuplicate(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[count] = arr[i]
            count++
        }

    }

    for (let i = 0; i < count; i++) {
        console.log(arr[i]);
    }

}

removeDuplicate([1, 2, 2, 3, 4, 5, 5, 5, 6, 6]);
