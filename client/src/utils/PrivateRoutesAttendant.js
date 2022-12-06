import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../actions";

const PrivateRoutesAttendant = ({ user }) => {
  console.log(user);
  return user && user.user.role === "attendant" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { user: state.user };
};
export default connect(mapStateToProps, { getUser })(PrivateRoutesAttendant);
