import React from "react";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <NavLink to="/login">
      <button>Login</button>
    </NavLink>
  );
};
export default LoginButton;
