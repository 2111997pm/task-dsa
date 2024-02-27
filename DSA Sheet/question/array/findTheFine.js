function findFine(car, fine, date) {
  let total = 0;
  for (let i = 0; i < car.length; i++) {
    if (date % 2 === 0) {
      if (car[i] % 2 !== 0) {
        total += fine[i];
      }
    } else {
      if (car[i] % 2 === 0) {
        total += fine[i];
      }
    }
  }
  return total;
}

let car = [2222, 2223, 2224];
let fine = [200, 300, 400];
let date = 8;

console.log(findFine(car, fine, date));

/*

function totalFine(N, date, car, fine) {
    let totalFine = 0;

    for (let i = 0; i < N; i++) {


        // Check if the car is odd-numbered and date is even or vice versa
        if ((car[i] % 2 === 0 && date % 2 !== 0) || (car[i] % 2 !== 0 && date % 2 === 0)) {
            totalFine += fine[i];
        }
    }

    return totalFine;
}

// Example 1:
const N1 = 4;
const date1 = 12;
const car1 = [2375, 7682, 2325, 2352];
const fine1 = [250, 500, 350, 200];
console.log(totalFine(N1, date1, car1, fine1)); // Output: 600

// Example 2:
const N2 = 3;
const date2 = 8;
const car2 = [2222, 2223, 2224];
const fine2 = [200, 300, 400];
console.log(totalFine(N2, date2, car2, fine2)); // Output: 300


*/
