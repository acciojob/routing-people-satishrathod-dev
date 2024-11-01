import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <p key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
