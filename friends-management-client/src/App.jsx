import "./App.css";

const friendsPromise = fetch("http://localhost:5000/friends").then((res) =>
  res.json(),
);
console.log(friendsPromise);
function App() {
  return (
    <>
      <h2>Get started</h2>
    </>
  );
}

export default App;
