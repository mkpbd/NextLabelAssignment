"use strict";
function isRecentBook(book) {
    let currentYear = new Date().getFullYear();
    let deffernct = currentYear - book.publishedYear;
    if (deffernct < 5) {
        return true;
    }
    return false;
}
// Sample Input :
const book1 = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};
console.log(isRecentBook(book1));
