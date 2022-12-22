import React, { useEffect, useState } from "react";
import AttendantHeader from "./AttendantHeader";
import { connect } from "react-redux";
import { getTransactions } from "../actions";

const AttendantPage = ({ getTransactions, getTransactionsList }) => {
  const [trans, setTrans] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [totalSales, setTotalSales] = useState(null);

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    let qSum = 0;
    let sSum = 0;
    if (getTransactionsList) {
      setTrans(
        getTransactionsList.transactions.map((trans) => {
          qSum += trans.quantity;
          sSum += trans.sales;
          return (
            <div key={trans._id}>
              <input value={trans.name} readOnly />
              <input value={trans.quantity} readOnly />
              <input value={trans.sales} readOnly />
            </div>
          );
        })
      );
    }
    setTotalQuantity(qSum);
    setTotalSales(sSum);
  }, [getTransactionsList]);

  return (
    <div>
      <AttendantHeader />
      <h2>TRANSACTIONS</h2>
      {trans}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { getTransactionsList: state.getTransactions };
};

export default connect(mapStateToProps, { getTransactions })(AttendantPage);
