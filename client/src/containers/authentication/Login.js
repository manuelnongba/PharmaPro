import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions';
import PrivateRoutes from '../../utils/PrivateRoutesAdmin';
import PrivateRoutesAttendant from '../../utils/PrivateRoutesAttendant';
import styles from '../../styles/Login.module.css';
import Button from '../../components/Button';

const Login = ({ login, user }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setDisabled(true);

    try {
      await login(formData);
    } catch (err) {
      setDisabled(false);
    }

    setFormData({
      username: '',
      password: '',
    });
  };

  useEffect(() => {
    if (!user) {
      <div></div>;
    } else if (user.user.role === 'admin') {
      navigate('/admin/dashboard');
    } else if (user.user.role === 'attendant') {
      navigate('/attendant/dashboard');
    }
  }, [user, disabled, navigate]);

  return (
    <div className={styles.loginpage}>
      <div className={styles.bgimg}>
        <img src="./loginimg.svg" alt="pharmacy" />
      </div>
      <div className={styles.loginform}>
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
          <Button type="submit" text="Login" disabled={disabled} />
        </form>
        <PrivateRoutes />
        <PrivateRoutesAttendant />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { login })(Login);
