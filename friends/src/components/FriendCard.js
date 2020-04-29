import React from "react";
import { Card, CardTitle, CardText, CardSubtitle } from "reactstrap";

export default function FriendCard(props) {
  console.log(props);
  return (
    <Card>
      <CardTitle>{props.friend.name}</CardTitle>
      <CardText>{props.friend.age}</CardText>
      <CardSubtitle>{props.friend.email}</CardSubtitle>
    </Card>
  );
}