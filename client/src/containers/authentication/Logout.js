import axios from 'axios';
import React from 'react';
import { showAlert } from '../../utils/alert';
import styles from '../../styles/AdminHeader.module.css';
import Button from '../../components/Button';

const Logout = () => {
  const onClick = async () => {
    try {
      const confirm = window.confirm('Are you sure you want to proceed?');

      if (confirm) {
        const res = await axios.get('/api/logout');

        if ((res.data.status = 'success')) {
          setTimeout(() => {
            window.location.replace('/login');
          }, 500);
        }

        showAlert('success', 'You successfully logged out!');
      }
    } catch (error) {
      showAlert('error', 'Error logging out try again!');
    }
  };

  return (
    <div>
      <Button callback={onClick} className={styles.logout} text="Logout" />
    </div>
  );
};

export default Logout;
