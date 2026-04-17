import React, { use } from "react";

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  //   console.log(friends);
  return (
    <div>
      <h2>all friends is here :{friends.length} </h2>

      {friends.map((friend) => (
        <p key={friend.id}>
          {friend.name},email: {friend.email}
        </p>
      ))}
    </div>
  );
};

export default Friends;
