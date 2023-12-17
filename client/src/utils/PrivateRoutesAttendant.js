import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoggedInUser } from '../actions';
import { useEffect } from 'react';
import LoginPage from '../containers/authentication/LoginPage';

const PrivateRoutesAttendant = ({ currentUser, getLoggedInUser }) => {
  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

  if (!currentUser || window.location.pathname === '/login') {
    return <div></div>;
  } else if (currentUser && currentUser.user.role !== 'attendant') {
    return <LoginPage />;
  } else if (currentUser && currentUser.user.role === 'attendant') {
    return <Outlet />;
  }
};

const mapStateToProps = (state) => {
  return { currentUser: state.user };
};
export default connect(mapStateToProps, { getLoggedInUser })(
  PrivateRoutesAttendant
);
