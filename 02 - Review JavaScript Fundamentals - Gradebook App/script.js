function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
  const classAvg = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  // USING TERNARY OPERATOR
  // const hasPassed = studentScore >= 60 ? "passed" : "failed"

  let hasPassed;

  if (studentScore >= 60) {
    hasPassed = "passed";
  } else {
    hasPassed = "failed";
  }

  return (
    "Class average: " +
    classAvg +
    ". Your grade: " +
    studentGrade +
    ". You " +
    hasPassed +
    " the course."
  );
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
