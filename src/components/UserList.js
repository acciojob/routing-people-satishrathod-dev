import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;