import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/manageproducts">Manage Products</Link>
    </div>
  );
};

export default AdminHeader;
