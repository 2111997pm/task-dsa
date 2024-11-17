// const lengthOfLastWord = function (s) {
//   let length = 0;
//   let counting = false;

//   for (let c of s) {
//     if (c !== " ") {
//       if (!counting) {
//         counting = true;
//         length = 1;
//       } else {
//         length++;
//       }
//     } else {
//       counting = false;
//     }
//   }

//   return length;
// };

// const lengthOfLastWord = function (s) {
//   let c = 0;
//   let space = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " ") {
//       space++;
//     } else {
//       c++;
//     }
//     if (s[i] === " " && c > 0 && space > 0) {
//       break;
//     }
//   }
//   return c;
// };

var lengthOfLastWord = function (s) {
  let length = 0;
  let i = s.length - 1;

  // Skip trailing spaces
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Count characters in last word
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
};

var lengthOfLastWord = function (s) {
  const str = s.trim();
  const arr = str.split(" ");
  return arr[arr.length - 1].length;
};

var lengthOfLastWord = function (s) {
  let j = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (j && s[i] == " ") {
      return j;
    }
    if (s[i] !== " ") {
      j++;
    }
  }
  return j;
};

const s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));
