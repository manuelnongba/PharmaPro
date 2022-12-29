import React, { useEffect, useState } from "react";
import AttendantHeader from "./AttendantHeader";
import { connect } from "react-redux";
import { getTransactions } from "../actions";

const AttendantPage = ({ getTransactions, transactions }) => {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    if (transactions && transactions.transactions) {
      setTrans(
        transactions.transactions.map((trans) => {
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
  }, [transactions]);

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
  return { transactions: state.transactions };
};

export default connect(mapStateToProps, { getTransactions })(AttendantPage);
