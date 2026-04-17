import "./App.css";
import Friends from "./Components/Friends";

const friendsPromise = fetch("http://localhost:5000/friends").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <h2>Get started</h2>
      <Friends friendsPromise={friendsPromise}></Friends>
    </>
  );
}

export default App;
