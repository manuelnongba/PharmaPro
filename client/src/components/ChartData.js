import React from 'react';
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
import styles from '../styles/AdminPage.module.css';

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

function ChartData({ transaction }) {
  let topFiveNames;
  let topFiveSalesFinal;
  let gSales = {};

  if (transaction && transaction.transactions) {
    transaction.transactions.forEach((el) => {
      gSales[el.name] = (gSales[el.name] || 0) + el.sales;
    });

    topFiveNames = Object.keys(gSales)
      .sort((a, b) => gSales[b] - gSales[a])
      .slice(0, 5);

    topFiveSalesFinal = Object.values(gSales)
      .sort((a, b) => b - a)
      .slice(0, 5);
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

  return (
    <div className={styles.graph}>
      <Bar data={data} className={styles.linegraph} />;
    </div>
  );
}

export default ChartData;
