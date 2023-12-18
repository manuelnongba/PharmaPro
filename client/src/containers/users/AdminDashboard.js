import React, { useEffect, useState } from 'react';
import AdminHeader from '../../components/AdminHeader';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions';
import ExpiredProducts from '../products/ExpiredProducts';
import ChartData from '../../components/ChartData';
import styles from '../../styles/AdminDashboard.module.css';
import Transactions from '../../components/Transactions';

const AdminPage = ({ transactions, getTransactions }) => {
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [totalSales, setTotalSales] = useState(null);
  const [chartLabels, setChartLabels] = useState();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    (function getChartData() {
      let gSales = {};

      if (transactions && transactions.transactions) {
        transactions.transactions.forEach((el) => {
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
  }, [transactions]);

  return (
    <div>
      <AdminHeader />
      <div className={styles.adminpage}>
        <Transactions
          setTotalQuantity={setTotalQuantity}
          setTotalSales={setTotalSales}
        />
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
  return { transactions: state.transactions };
};

export default connect(mapStateToProps, { getTransactions })(AdminPage);
