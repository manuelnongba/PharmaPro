import React, { useEffect, useState } from 'react';
import AdminHeader from './AdminHeader';
import { connect } from 'react-redux';
import { getTransactions } from '../actions';
import styles from '../styles/AdminPage.module.css';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ExpiredProducts from './ExpiredProducts';

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const AdminPage = ({ transaction, getTransactions }) => {
  const [trans, setTrans] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [totalSales, setTotalSales] = useState(null);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  useEffect(() => {
    let qSum = 0;
    let sSum = 0;
    if (transaction && transaction.transactions) {
      setTrans(
        transaction.transactions.map((trans) => {
          qSum += trans.quantity;
          sSum += trans.sales;
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
    setTotalQuantity(qSum);
    setTotalSales(sSum);
  }, [transaction]);

  let topFiveNames;
  let topFiveSalesFinal;

  if (transaction && transaction.transactions) {
    const topSales = transaction.transactions.map((el) => {
      return el.sales;
    });
    const topFiveSales = topSales.sort((a, b) => b - a).slice(0, 5);

    const topNames = [];
    const topS = [];

    transaction.transactions.forEach((trans) => {
      topFiveSales.forEach((val) => {
        if (trans.sales === val) {
          // console.log(trans.name);
          if (!topNames.includes(trans.name)) {
            topS.push(trans.sales);
            topNames.push(trans.name);
          }
        }
      });
    });

    topFiveSalesFinal = topS.slice(0, 5);
    topFiveNames = topNames.slice(0, 5);
  }

  const data = {
    labels: topFiveNames,
    datasets: [
      {
        label: '369',
        data: topFiveSalesFinal,
        backgroundColor: '#b2f2bb',
        borderColor: '#adb5bd',
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div>
      <AdminHeader />
      <div className={styles.adminpage}>
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
        <div className={styles.details}>
          <div className={styles.sales}>
            <h2>Total Sales</h2>
            <div className={styles.totalsales}> {totalSales}</div>
          </div>
          <div className={styles.quantity}>
            <h2>Total Quantity</h2>
            <div className={styles.totalquantity}>{totalQuantity}</div>
          </div>
          <div className={styles.graph}>
            <Bar data={data} options={options} className={styles.linegraph} />
          </div>
          <div className={styles.expiredproducts}>
            <ExpiredProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { transaction: state.transactions };
};

export default connect(mapStateToProps, { getTransactions })(AdminPage);
