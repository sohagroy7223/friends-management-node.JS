import React from "react";
import { use } from "react";

const Books = ({ booksPromise }) => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div>
      <h3>all books here {books.length}</h3>
      {books.map((book) => (
        <p key={book.id}>
          name: {book.name}, id: {book.id}
        </p>
      ))}
    </div>
  );
};

export default Books;
