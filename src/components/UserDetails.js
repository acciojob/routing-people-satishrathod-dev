import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users.find((user) => user.id == parseInt(id));

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
