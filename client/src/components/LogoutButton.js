import axios from "axios";
import React from "react";

const LogoutButton = () => {
  const onClick = async () => {
    try {
      const res = await axios.get("/api/logout");

      if ((res.data.status = "success")) window.location.replace("/login");
    } catch (error) {
      alert("Error logging out try again!");
    }
  };

  return (
    <div>
      <button onClick={() => onClick()}>Logout</button>
    </div>
  );
};

export default LogoutButton;
