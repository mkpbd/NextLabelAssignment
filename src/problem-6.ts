type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

function isRecentBook(book: Book): boolean {
  let currentYear: number = new Date().getFullYear();

  let deffernct: number = currentYear - book.publishedYear;

  if (deffernct < 5) {
    return true;
  }
  return false;
}

// Sample Input :
const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};

console.log(isRecentBook(book1));
