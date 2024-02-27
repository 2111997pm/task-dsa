function findEmptyBottle(total, exchange) {
  let totalBottle = total;
  let emptyBottle = total;

  while (emptyBottle >= exchange) {
    let empty = Math.floor(emptyBottle / exchange);

    emptyBottle = (emptyBottle % exchange) + empty;

    totalBottle += empty;
  }

  return totalBottle;
}
console.log(findEmptyBottle(9, 3));
