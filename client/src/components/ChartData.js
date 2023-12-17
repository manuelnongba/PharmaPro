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
import styles from '../styles/AdminDashboard.module.css';

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

function ChartData({ labels, chartData }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: '369',
        data: chartData,
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
