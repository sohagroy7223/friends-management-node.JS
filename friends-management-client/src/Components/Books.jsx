import React from "react";
import { use } from "react";

const Books = ({ booksPromise }) => {
  const books = use(booksPromise);
  const handelAddBook = (e) => {
    e.preventDefault();
    const book = e.target.name.value;
    console.log(book);
  };
  console.log(books);
  return (
    <div>
      <div>
        <h3>add book</h3>
        <form onSubmit={handelAddBook}>
          <input type="text" name="name" placeholder="add book name" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
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
