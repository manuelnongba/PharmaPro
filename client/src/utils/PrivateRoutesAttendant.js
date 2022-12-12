import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggedInUser } from "../actions";
import { useEffect } from "react";
import LoginButton from "../components/LoginButton";

const PrivateRoutesAttendant = ({ currentUser, getLoggedInUser }) => {
  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

  if (!currentUser || window.location.pathname === "/login") {
    return <div></div>;
  } else if (currentUser && currentUser.user.role !== "attendant") {
    if (window.location.pathname === "/") {
      return <Navigate to="/admin/dashboard" />;
    }
    return <LoginButton />;
  } else if (currentUser && currentUser.user.role === "attendant") {
    if (window.location.pathname === "/") {
      return <Navigate to="/attendant/dashboard" />;
    }
    return <Outlet />;
  }
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { getLoggedInUser })(
  PrivateRoutesAttendant
);
