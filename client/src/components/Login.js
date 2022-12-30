import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Login.module.css";

const LoginButton = () => {
  return (
    <div className={styles.login}>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </div>
  );
};
export default LoginButton;
