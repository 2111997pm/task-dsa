// print the following series 1 8 27 64 125;
/*
function printSeris(n) {
    for (let i = 1; i <= Math.cbrt(n); i++) {
        console.log(i ** 3);
    }

}
printSeris(125)
*/

// print even numner from 1 to n that not divisible by 4

/* function printEvenNumer(n) {

   for (let i = 2; i <= n; i = i + 2) {
       if (i % 4 === 0) {
           continue;
       }
       console.log(i);
   }

}
printEvenNumer(10)
*/


// print strar

// *****
// ****
// ***
// **
// *

/*
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5 - i; j++) {
        document.write('*')
    }
    document.write('<br>')
}

*/


// print following Pattern;

// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****

/*

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5 - i; j++) {
        document.write('*')
    }
    document.write('<br>')
}
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
        document.write('*')
    }
    document.write('<br>')
}

*/


// *    *
// **   **
// ***  ***
// **** ****
// **********



/*
function print_pattern() {
    for (let i = 1; i <= 5; i++) {
        pattern = '*'.repeat(i) + '&nbsp;&nbsp;'.repeat(5 - i) + '*'.repeat(i) + '<br>';
        document.write(pattern)
    }


}
print_pattern();

*/




