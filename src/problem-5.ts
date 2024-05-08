type Student = {
  name: string;
  age: number;
  grades: number[];
};

function calculateAverageGrade(student: Student): number {
  let totalNumber = student.grades.reduce(
    (preveValue, currentValue) => preveValue + currentValue,
    0
  );

  return totalNumber / student.grades.length;
}

const student1: Student = {
  name: "Bob",
  age: 17,
  grades: [75, 80, 82, 88, 90],
};

console.log(calculateAverageGrade(student1));
