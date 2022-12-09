import React from "react";
import { Link } from "react-router-dom";

const AttendantHeader = () => {
  return (
    <div className="attendant-header">
      <Link to="/attendant/dashboard">Dashboard</Link>
      <Link to="/attendant/transact">Transact</Link>
    </div>
  );
};

export default AttendantHeader;
