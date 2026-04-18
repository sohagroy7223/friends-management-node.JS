const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello World this is friends server it's work");
});

const friends = [
  { name: "akash", email: "akash@gmail.com", id: 1 },
  { name: "sumon", email: "sumon@gmail.com", id: 2 },
  { name: "kajol", email: "kajol@gmail.com", id: 3 },
  { name: "dipto", email: "dipto@gmail.com", id: 4 },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.post("/friends", (req, res) => {
  console.log("for post method call ", req.body);
  const newFriends = req.body;
  newFriends.id = friends.length + 1;
  friends.push(newFriends);
  res.send(newFriends);
});

const books = [
  { name: "Don Quixote", id: 1 },
  { name: "Treasure Island", id: 2 },
  { name: "Jane Eyre", id: 3 },
];

app.get("/books", (req, res) => {
  res.send(books);
});

app.post("/books", (req, res) => {
  console.log("book post method call", req.body);
  const newBook = req.body;
  // console.log(newBook);
  newBook.id = books.length + 1;
  books.push(newBook);
  res.send(newBook);
});

app.listen(port, () => {
  console.log(`this app listening on port :${port}`);
});
