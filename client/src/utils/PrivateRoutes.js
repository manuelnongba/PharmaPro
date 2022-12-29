import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggedInUser } from "../actions";
import { useEffect } from "react";
import LoginButton from "../components/LoginButton";

const PrivateRoutes = ({ currentUser, getLoggedInUser }) => {
  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

  if (!currentUser || window.location.pathname === "/login") {
    return <div></div>;
  } else if (currentUser && currentUser.user.role !== "admin") {
    return <LoginButton />;
  } else if (currentUser && currentUser.user.role === "admin") {
    return <Outlet />;
  }
};

const mapStateToProps = (state) => {
  return { currentUser: state.user };
};
export default connect(mapStateToProps, { getLoggedInUser })(PrivateRoutes);
