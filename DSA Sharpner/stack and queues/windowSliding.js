function windowSlidingMax(arr,k){
    let n = arr.length;
    let result = [];

    for(let i=0; i<=arr.length - k; i++){
        let max = arr[i];

        for(let j=1; j<k; j++){
            if(arr[i+j]>max){
                max = arr[i+j]
            }
        }
        result.push(max)
    }

return result;

}

console.log(windowSlidingMax([1,3,-1,-3,5,3,6,7],3));