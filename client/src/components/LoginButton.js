import React from "react";
import { NavLink } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";
import PrivateRoutesAttendant from "../utils/PrivateRoutesAttendant";

const LoginButton = () => {
  return (
    <div>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </div>
  );
};
export default LoginButton;
