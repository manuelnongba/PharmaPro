import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggedInUser } from "../actions";
import { useEffect } from "react";

const PrivateRoutesAttendant = ({ currentUser, getLoggedInUser }) => {
  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

  console.log(currentUser);
  if (!currentUser) {
    //login button
    return <div></div>;
  } else if (currentUser && currentUser.user.role === "attendant") {
    return <Outlet />;
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { getLoggedInUser })(
  PrivateRoutesAttendant
);
