import "./App.css";
import Books from "./Components/Books";
import Friends from "./Components/Friends";

const friendsPromise = fetch("http://localhost:5000/friends").then((res) =>
  res.json(),
);

const booksPromise = fetch("http://localhost:5000/books").then((res) =>
  res.json(),
);
// console.log(booksPromise);

function App() {
  return (
    <>
      <h2>Get started</h2>
      <Friends friendsPromise={friendsPromise}></Friends>
      <Books booksPromise={booksPromise}></Books>
    </>
  );
}

export default App;
