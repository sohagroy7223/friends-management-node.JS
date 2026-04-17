const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => {
  console.log(`this app listening on port :${port}`);
});
