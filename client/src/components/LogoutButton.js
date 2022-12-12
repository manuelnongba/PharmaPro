import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions";

const LogoutButton = ({ logout }) => {
  const onClick = () => {
    logout();

    window.location.replace("/login");
  };

  return (
    <div>
      <button onClick={() => onClick()}>Logout</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};
export default connect(mapStateToProps, { logout })(LogoutButton);
