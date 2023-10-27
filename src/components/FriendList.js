import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, onSelection, selectedFrirnd }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFrirnd={selectedFrirnd}
        />
      ))}
    </ul>
  );
};

export default FriendList;
