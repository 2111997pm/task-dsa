function rotateString(s) {
    let array = s.split('')
    let left = 0;
    let right = array.length - 1;

    while (left < right) {

        [array[left], array[right]] = [array[right], array[left]]

        left++;
        right--;
    }
    return array.join('');


}
console.log(rotateString("prahalad"));