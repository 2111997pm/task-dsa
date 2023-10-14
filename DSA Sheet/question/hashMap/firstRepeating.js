function firstRepeatingElement(A) {
    const seen = new Map();
    let firstRepeatingIndex = A.length;

    for (let i = 0; i < A.length; i++) {
        const num = A[i];

        if (seen.has(num)) {

            firstRepeatingIndex = Math.min(firstRepeatingIndex, seen.get(num));
        } else {

            seen.set(num, i);
        }
    }

    if (firstRepeatingIndex < A.length) {
        return A[firstRepeatingIndex];
    }


    return -1;
}

// Example usage:
const input1 = [10, 5, 3, 4, 3, 5, 6];
const input2 = [6, 10, 5, 4, 9, 120];.

const output1 = firstRepeatingElement(input1);
const output2 = firstRepeatingElement(input2);

console.log(output1); // Output: 5
console.log(output2); // Output: -1
