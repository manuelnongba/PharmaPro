import React from 'react';
import AttendantHeader from '../../components/AttendantHeader';
import ExpiredProducts from '../products/ExpiredProducts';
import styles from '../../styles/AttendantDashboard.module.css';
import Transactions from '../../components/Transactions';

const AttendantPage = () => {
  return (
    <div>
      <AttendantHeader />
      <div className={styles.attendantpage}>
        <Transactions />
        <div className={styles.expiredproducts}>
          <ExpiredProducts />
        </div>
      </div>
    </div>
  );
};

export default AttendantPage;
