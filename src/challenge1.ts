/* =======================
    1. Create a type book
   =======================*/
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

/* =======================
    2. Create books array
   =======================*/
let books: Book[] = [];

/* =====================================================
    3. Create function named addBook() to add new books
   =====================================================*/
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = { title, author, publicationYear };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

/* ==================================================================
    4. Create function named listBooks() to display all stored books
   ==================================================================*/
function listBooks(): void {
  console.log("All Books:");
  books.forEach((item) =>
    console.log(`- ${item.title} by ${item.author} (${item.publicationYear})`)
  );
}

/* ====================================================================================
    5. Create function named searchBook() to find a book by title (optional parameter)
   ====================================================================================*/
function searchBook(title?: string): void {
  // jika title tidak disertakan
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  // hasil filter disimpan dalam variabel results
  const results = books.filter((eachtitle) => eachtitle.title.includes(title));

  console.log(`Search Results for "${title}":`);

  // hasil filter kosong
  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
  }

  // hasil filter ada
  results.forEach((item) => {
    console.log(`- ${item.title} by ${item.author} (${item.publicationYear})`);
  });
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
