function findMaxWord(sentance) {
  let max = 0;

  for (let i = 0; i < sentance.length; i++) {
    let word = sentance[i].split(" ");
    max = Math.max(max, word.length);
  }
  return max;
}

console.log(
  findMaxWord([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  findMaxWord(["please wait", "continue to fight", "continue to win"])
);
