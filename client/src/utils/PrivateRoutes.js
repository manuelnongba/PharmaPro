import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggedInUser } from "../actions";
import { useEffect, useState } from "react";

const PrivateRoutes = ({ currentUser, getLoggedInUser }) => {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   // setUser(props.currentUser);
  // }, []);
  useEffect(() => {
    getLoggedInUser();
  }, []);

  console.log(currentUser);
  if (!currentUser) {
    return <div></div>;
  } else if (currentUser && currentUser.user.role === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { getLoggedInUser })(PrivateRoutes);
