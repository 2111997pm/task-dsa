function alternateSort(s1) {

    let upperCase = [];
    let lowerCase = [];


    for (let i = 0; i < s1.length; i++) {

        if (s1[i] === s1[i].toUpperCase()) {
            upperCase.push(s1[i])
        } else {
            lowerCase.push(s1[i])
        }

    }

    upperCase.sort();
    lowerCase.sort();

    let proString = '';
    let upperIndex = 0;
    let lowerIndex = 0;

    while (upperIndex < upperCase.length || lowerIndex < lowerCase.length) {

        if (upperIndex < upperCase.length) {
            proString += upperCase[upperIndex]
            upperIndex++;
        }
        if (lowerIndex < lowerCase.length) {

            proString += lowerCase[lowerIndex]
            lowerIndex++;
        }

    }

    return proString;


}

console.log(alternateSort('bAwutndekWEdkd'));