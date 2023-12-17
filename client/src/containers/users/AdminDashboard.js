import React, { useEffect, useState } from 'react';
import AdminHeader from '../../components/AdminHeader';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions';
import ExpiredProducts from '../products/ExpiredProducts';
import ChartData from '../../components/ChartData';
import styles from '../../styles/AdminDashboard.module.css';

const AdminPage = ({ transaction, getTransactions }) => {
  const [trans, setTrans] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [totalSales, setTotalSales] = useState(null);
  const [chartLabels, setChartLabels] = useState();
  const [chartData, setChartData] = useState();

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

  useEffect(() => {
    (function getChartData() {
      let gSales = {};

      if (transaction && transaction.transactions) {
        transaction.transactions.forEach((el) => {
          gSales[el.name] = (gSales[el.name] || 0) + el.sales;
        });

        const chartlabels = Object.keys(gSales)
          .sort((a, b) => gSales[b] - gSales[a])
          .slice(0, 5);

        const chartData = Object.values(gSales)
          .sort((a, b) => b - a)
          .slice(0, 5);

        setChartLabels(chartlabels);
        setChartData(chartData);
      }
    })();
  }, [transaction]);

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
          <ChartData labels={chartLabels} chartData={chartData} />
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
