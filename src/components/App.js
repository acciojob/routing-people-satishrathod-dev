import React from "react";
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      description: "Description for Item 1",
      username: "Bret",
      email: "Sincere@april.biz",
      Phone: "1-770-736-8031 x56442",
      Website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      description: "Description for Item 2",
      username: "Antonette",
      email: "Sincere@april.biz",
      Phone: "1-770-736-8031 x56442",
      Website: "hildegard.org",
    },

    {
      id: 3,
      name: "Clenmentine Bouch",
      description: "Description for Item 3’,username: “Samantha",
      email: "Sincere@april.biz",
      Phone: "1-770-736-8031 x56442",
      Website: "hildegard.org",
    },

    {
      id: 4,
      name: "Patricia Labsack",
      description: "Description for Item 3’,username: “Bret",
      email: "Sincere@april.biz",
      Phone: "1-770-736-8031 x56442",
      Website: "hildegard.org",
    },

    {
      id: 5,
      name: "Clementina DuBuque",
      description: "Description for Item 3",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      Phone: "024-648-3804",
      Website: "ambrose.net",
    },
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
