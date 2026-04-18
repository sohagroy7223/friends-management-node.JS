import React, { use, useState } from "react";

const Friends = ({ friendsPromise }) => {
  const allFriends = use(friendsPromise);
  //   console.log(friends);
  const [friends, setFriends] = useState(allFriends);

  const handelAddFriend = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(name, email);
    const newFriend = { name, email };

    // send data to the server

    fetch("http://localhost:5000/friends", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFriend),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("get add after post", data);
        const newFriends = [...friends, data];
        setFriends(newFriends);
      });
  };

  const handelAddBook = (e) => {
    e.preventDefault();
    const book = e.target.name.value;
    console.log(book);
  };

  return (
    <div>
      <h3>add user</h3>
      <form onSubmit={handelAddFriend}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="submit" />
        <br />
      </form>
      <div>
        {friends.map((friend) => (
          <p key={friend.id}>
            {friend.name},email: {friend.email}
          </p>
        ))}
      </div>

      <div>
        <h3>add book</h3>
        <form onSubmit={handelAddBook}>
          <input type="text" name="name" placeholder="add book name" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default Friends;
