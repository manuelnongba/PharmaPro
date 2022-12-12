import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const AttendantHeader = () => {
  return (
    <div className="attendant-header">
      <LogoutButton />
      <Link to="/attendant/dashboard">Dashboard</Link>
      <Link to="/attendant/transact">Transact</Link>
    </div>
  );
};

export default AttendantHeader;
