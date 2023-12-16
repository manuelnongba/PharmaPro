import axios from 'axios';
import React from 'react';
import { showAlert } from '../utils/alert';
import styles from '../styles/AdminHeader.module.css';

const Logout = () => {
  const onClick = async () => {
    try {
      const res = await axios.get('/api/logout');

      if ((res.data.status = 'success')) {
        setTimeout(() => {
          window.location.replace('/login');
        }, 1500);
      }
      showAlert('success', 'You successfully logged out!');
    } catch (error) {
      showAlert('error', 'Error logging out try again!');
    }
  };

  return (
    <div>
      <button onClick={onClick} className={styles.logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
