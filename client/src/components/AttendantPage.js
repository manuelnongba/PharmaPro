import React, { useEffect, useState } from 'react';
import AttendantHeader from './AttendantHeader';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';
import styles from '../styles/AttendantPage.module.css';
import ExpiredProducts from './ExpiredProducts';

const AttendantPage = ({ getTransactions, transactions }) => {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  useEffect(() => {
    if (transactions && transactions.transactions) {
      setTrans(
        transactions.transactions.map((trans) => {
          return (
            <tbody key={trans._id}>
              <tr>
                <td>{trans.name}</td>
                <td>{trans.quantity}</td>
                <td>{trans.sales}</td>
              </tr>
            </tbody>
          );
        })
      );
    }
  }, [transactions]);

  return (
    <div>
      <AttendantHeader />
      <div className={styles.attendantpage}>
        <div className={styles.transactions}>
          <h2>TRANSACTIONS</h2>

          <div className={styles.transactionslist}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Sales</th>
                </tr>
              </thead>
              {trans}
            </table>
          </div>
        </div>
        <div className={styles.expiredproducts}>
          <ExpiredProducts />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { transactions: state.transactions };
};

export default connect(mapStateToProps, { getTransactions })(AttendantPage);
