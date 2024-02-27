/*

function Swap(a, b) {
    let swap;
    swap = a;
    a = b;
    b = swap;

    console.log(a);
    console.log(b);
}

console.log(Swap(5, 7));

*/

/*
function printEven(n){

    for(let i=2; i<n; i = i+2){
        console.log(i);
    }

}

printEven(10)

*/



// printSeries = 1,4,9,16,25,36,49

/* function printSeries(n) {
    for (let i = 1; i <= 7; i++) {
        console.log(i * i);
    }
}

printSeries(7)

*/


// print Number That not divisible by 5


/* function NotDivisbleBy5(n) {

    for (let i = 1; i < n; i++) {
        if (i % 5 !== 0) {
            console.log(i);
            continue
        }

    }

}

NotDivisbleBy5(10)
*/

// first Approch To solve ArmStrong Number

/*

function armStrong(n) {
    let intialValue = n;
    let rem = 0;
    while (n > 0) {
        rem += (n % 10) ** 3;
        n = Math.floor(n / 10)
    }

    return rem === intialValue;


}
console.log(armStrong(153));
console.log(armStrong(123));

*/

// second approach To Solve ArmStrongNumber

/* function armStrongNumber(n) {
    let number = n.toString()
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        total += parseInt(number[i] ** 3)
    }
    return total === n
}
console.log(armStrongNumber(153));
console.log(armStrongNumber(123));
*/


// reverse the number 

// first Approach

/* function reverseNumber(n) {
   let reverse = 0;
   while (n > 0) {
       reverse = reverse * 10 + (n % 10)
       n = Math.floor(n / 10)
   }

   return reverse;
}
console.log(reverseNumber(123));
*/

// second Approach

/* function reverseNumber(n) {
    let number = n.toString()
    number = number.split('').reverse().join('')
    return number;
}
console.log(reverseNumber(123));
*/

// print odd Number


 /* function printOddnum(n) {

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }


}
printOddnum(7);

*/




