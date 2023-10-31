function maxOfDiogonal(matrix) {
  let n = matrix.length;
    let max1 = -Infinity;
    let max2 = -Infinity;

    for(let i=0; i<matrix.length; i++){
        max1 = Math.max(matrix[i][i],max1)
        max2 = Math.max(matrix[i][n-i-1],max2)
    }
    return [max1,max2]
}

console.log(
  maxOfDiogonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  maxOfDiogonal([
    [-1, 2, -3],
    [-4, 5, -6],
    [-7, -8, 9],
  ])
);
