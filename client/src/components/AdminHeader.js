import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <LogoutButton />
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/manageproducts">Manage Products</Link>
    </div>
  );
};

export default AdminHeader;
