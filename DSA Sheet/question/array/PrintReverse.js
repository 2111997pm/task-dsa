let output = "";

for (let i = 0; i < 5; i++) {
  let line = "";
  let n = 0;
  for (let j = 0; j <= i; j++) {
    if (j % 2 === 0) {
      line += n + i - j + 1 + " ";
    } else {
      line += 5 + n - i + " ";
    }
    n += 5 - j;
  }
  line += "<br>";
  output += line;
}

document.write(output);
console.log("hi");