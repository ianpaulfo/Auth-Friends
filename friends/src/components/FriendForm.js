import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from "reactstrap";

export default function FriendFrom() {
  const [newFriend, SetNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: 37,
    email: ""
  });

  const handleChange = event => {
    SetNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  const friendSubmit = () => {
    axiosWithAuth()
      .post("friends", newFriend)
      .then(res => {
        console.log(res);
      });
  };

  return (
    <form onSubmit={friendSubmit}>
      <input
        type="text"
        name="name"
        value={newFriend.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={newFriend.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={newFriend.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Button color="primary" type="submit">
        Add Friend
      </Button>
    </form>
  );
}