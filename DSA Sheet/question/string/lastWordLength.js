var lengthOfLastWord = function (s) {
    var cnt = 0;

    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            if (cnt > 0) {
                return cnt;
            }
            continue;
        }

        cnt += 1;
    }
    return cnt;
};
console.log(lengthOfLastWord("Hello World"));