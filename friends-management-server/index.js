const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello World this is friends server it's work");
});

app.get("/friends", (req, res) => {
  res.send("all friends is here");
});

app.listen(port, () => {
  console.log(`this app listening on port :${port}`);
});
