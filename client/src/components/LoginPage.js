import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../actions';
import PrivateRoutes from '../utils/PrivateRoutes';
import PrivateRoutesAttendant from '../utils/PrivateRoutesAttendant';
import styles from '../styles/LoginPage.module.css';

const Login = (props) => {
  // Declare a new state variable, which we'll call "formData"
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    // Update the formData state with the new values from the input fields
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // TODO: Add code to submit the formData to a server or call an authentication function

    props.getUser(formData);

    // Clear the form fields after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  useEffect(() => {
    if (!props.user) {
      <div></div>;
    } else if (props.user.user.role === 'admin') {
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 1000);
    } else if (props.user.user.role === 'attendant') {
      setTimeout(() => {
        navigate('/attendant/dashboard');
      }, 1000);
    }
  }, [props, navigate]);

  return (
    <div className={styles.loginpage}>
      <img
        src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1672880675/logo_tiappr.svg"
        alt="pharmapro-logo"
        className={styles.icon}
      />

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="username"
          minLength="5"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="password"
          minLength="8"
        />

        <button type="submit">Login</button>
      </form>
      <PrivateRoutes />
      <PrivateRoutesAttendant />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { getUser })(Login);
