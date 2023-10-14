function checkTwoArray(n, A, B) {
    A.sort((a, b) => a - b)

    B.sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {

        if (A[i] !== B[i]) {
            return 0;
        }
    }
    return 1;
}


let n = 5;
let A = [1, 2, 5, 4, 0]
let B = [2, 4, 5, 0, 1]
console.log(checkTwoArray(n, A, B));