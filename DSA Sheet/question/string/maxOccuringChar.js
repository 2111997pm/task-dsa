
function maxOcuringChar(str) {
    let obj = {}
    let word = "";
    let max = 0;


    for (let char of [...str].sort()) {

        obj[char] = (obj[char] || 0) + 1;
        if (obj[char] > max) {
            word = char
            max++;
        }
    }
    return word;
}


console.log(maxOcuringChar('testsample'));

