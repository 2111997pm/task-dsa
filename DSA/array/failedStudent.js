function failedStudents(scores) {
  const passedStudents = [];
  const failedStudents = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 0) {
      passedStudents.push(scores[i]);
    } else {
      failedStudents.push(scores[i]);
    }
  }

  const result = passedStudents.concat(failedStudents);

  return result;
}

console.log(failedStudents([1, -1, 3, 2, -7, -5, 11, 6]));
