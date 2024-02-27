// find Vovels in string
/*
function findVovels(str) {
  let count = 0;

  for (let char of str) {
    let newChar = char.toLowerCase();
    if (
      newChar === "a" ||
      newChar === "e" ||
      newChar === "i" ||
      newChar === "o" ||
      newChar === "u"
    ) {
      count++;
    }
  }

  return count;
}
console.log(findVovels("HELLO WORLD"));
console.log(findVovels("a1e@i2o!u"));

*/
/*
function maximun(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 5) {
        count++;
      }
    }
  }
  return count;
}

console.log(maximun([[1,2,5],[3,5,5]]));
*/

/*

function minOperationsToRevampArray(arr) {
     arr.sort((a, b) => a - b);
  let operations = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      const diff = arr[i - 1] - arr[i] + 1;
      arr[i] += diff;
      operations += diff;
    }
  }

  return operations;
}

console.log(minOperationsToRevampArray([1, 2,2]));
*/

/*
function perfectTrio(arr){
let count = 0;

for(let i=0; i<arr.length-2; i++){
    for(let j=i+1; j<arr.length-1; j++){
        for(let k=j+1; k<arr.length; k++){
            
            if(arr[i]<arr[j] && arr[j]<arr[k]){
                console.log(arr);
                count++
            }
        }
    }
}

return count;

}

console.log(perfectTrio([1,2,3,4]));
*/