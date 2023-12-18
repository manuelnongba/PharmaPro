import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminDashboard.module.css';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';

function Transactions({
  transactions,
  getTransactions,
  setTotalQuantity,
  setTotalSales,
}) {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  useEffect(() => {
    let qSum = 0;
    let sSum = 0;
    if (transactions && transactions.transactions) {
      setTrans(
        transactions.transactions.map((trans) => {
          qSum += trans.quantity;
          sSum += trans.sales;
          return (
            <div key={trans._id} className={styles.transitem}>
              <p>{trans.name}</p>
              <p style={{ padding: '0 5px' }}>{trans.quantity}</p>
              <p>{trans.sales}</p>
            </div>
          );
        })
      );
    }

    if (setTotalQuantity) setTotalQuantity(qSum);
    if (setTotalSales) setTotalSales(sSum);
  }, [transactions, setTotalQuantity, setTotalSales]);

  return (
    <div>
      <div className={styles.transactions}>
        <h2>TRANSACTIONS</h2>
        <div className={styles.transactionslist}>
          <div className={styles.transheader}>
            <h3>
              <ion-icon name="document-text-outline"></ion-icon>
              <span>Name</span>
            </h3>
            <h3>
              <ion-icon name="bar-chart-outline"></ion-icon>
              <span>Quantity</span>
            </h3>
            <h3>
              <ion-icon name="cash-outline"></ion-icon>
              <span>Sales</span>
            </h3>
          </div>
          <div className={styles.transcontent}>{trans}</div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { transactions: state.transactions };
};

export default connect(mapStateToProps, { getTransactions })(Transactions);
