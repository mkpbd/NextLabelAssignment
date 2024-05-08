"use strict";
function calculateAverageGrade(student) {
    let totalNumber = student.grades.reduce((preveValue, currentValue) => preveValue + currentValue, 0);
    return totalNumber / student.grades.length;
}
const student1 = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};
console.log(calculateAverageGrade(student1));
