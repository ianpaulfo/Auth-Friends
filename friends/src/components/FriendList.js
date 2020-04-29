import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h3>Add a Friend</h3>
      <FriendForm />
      {friends.map(friend => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
export default FriendsList;