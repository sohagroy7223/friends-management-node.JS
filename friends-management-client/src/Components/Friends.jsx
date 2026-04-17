import React, { use } from "react";

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  //   console.log(friends);

  const handelAddFriend = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(name, email);
    const newFriends = { name, email };

    // send data to the server

    fetch("http://localhost:5000/friends", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFriends),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("get add after post", data);
      });
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
    </div>
  );
};

export default Friends;
