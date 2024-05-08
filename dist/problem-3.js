"use strict";
function filterEvenNumbers(arr) {
    let evenNumber = [];
    arr.forEach((a) => {
        if (a % 2 == 0) {
            evenNumber.push(a);
        }
    });
    return evenNumber;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
