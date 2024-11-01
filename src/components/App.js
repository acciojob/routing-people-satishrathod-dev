import React from "react";
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const users = [
    { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
    { id: 2, name: "Bret Rathod", email: "bret@example.com" },
    { id: 3, name: "Shubham Wagh", email: "shubham@example.com" },
    { id: 4, name: "Rohit Palkar", email: "rohit@example.com" },
  ];

  return (
    <div>
      {/* Do not remove the main div */}
      Hey there!!
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetails users={users} />} />
      </Routes>
    </div>
  );
};

export default App;
