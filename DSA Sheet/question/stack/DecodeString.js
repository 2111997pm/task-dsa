function decodeString(s) {
    let number = []
    let string = [];
    let temp = '';
    let ans = '';


    for (char of s) {
        if (!isNaN(char)) {
            temp = `${temp}${char}`
        } else if (char === '[') {
            number.push(temp)
            temp = "";
            string.push(ans)
            ans = "";
        } else if (char === ']') {
            ans = string.pop() + ans.repeat(number.pop())
        } else {
            ans += char
        }
    }

    return ans;

}


console.log(decodeString('3[a]2[bc]'));