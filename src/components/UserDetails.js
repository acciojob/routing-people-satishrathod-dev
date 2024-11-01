import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const { id } = useParams();
  // const user = users.find((user) => user.id == parseInt(id));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = () => {
      const foundUser = users.find((user) => user.id == parseInt(id));
      if (foundUser) {
        setUser(foundUser);
      }
      setLoading(false);
    };
    setTimeout(fetchUser, 1000);
  }, [id, users]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
