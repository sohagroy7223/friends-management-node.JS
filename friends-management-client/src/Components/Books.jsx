import React from "react";
import { useState } from "react";
import { use } from "react";

const Books = ({ booksPromise }) => {
  const allBooks = use(booksPromise);
  const [books, setBooks] = useState(allBooks);
  const handelAddBook = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // console.log(book);
    const newBook = { name };
    // send data to server

    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("book post method call", data);
        const newBooks = [...books, data];
        setBooks(newBooks);
      });
  };
  //   console.log(books);
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
