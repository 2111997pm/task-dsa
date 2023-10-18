function copyArray(arr){

    let data = [...arr,...arr]
    return data;

}
console.log(copyArray([4,5,1]));