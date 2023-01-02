import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import styles from "../styles/AdminHeader.module.css";

const AdminHeader = () => {
  return (
    <div className={styles.adminheader}>
      <div>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/manageproducts">Manage Products</NavLink>
      </div>
      <LogoutButton />
    </div>
  );
};

export default AdminHeader;
