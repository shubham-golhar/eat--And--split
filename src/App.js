import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddfriend, setShowAddFriend] = useState(false);

  const [friends, setFriends] = useState(initialFriends);

  const [selectedFrirnd, setSelectedFriend] = useState(null);
  const handleShowAddFriend = () => {
    setShowAddFriend((curr) => !curr);
  };

  const handleAddFriend = (newfriend) => {
    setFriends((currfriends) => [...currfriends, newfriend]);
    setShowAddFriend(false);
  };

  const handleSelectionfriend = (selectedfriend) => {
    // setSelectedFriend(selectedfriend);

    setSelectedFriend((curr) =>
      curr?.id === selectedfriend.id ? null : selectedfriend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFrirnd.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelectionfriend}
          selectedFrirnd={selectedFrirnd}
        />

        {showAddfriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddfriend ? "Close" : "Add Friend "}
        </Button>
      </div>

      {selectedFrirnd && (
        <FormSplitBill
          selectedFrirnd={selectedFrirnd}
          key={selectedFrirnd.id}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
