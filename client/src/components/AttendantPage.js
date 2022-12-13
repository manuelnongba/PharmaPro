import React, { useEffect, useState } from "react";
import AttendantHeader from "./AttendantHeader";
import { connect } from "react-redux";
import { getTransactions } from "../actions";

const AttendantPage = ({ getTransactions, getTransactionsList }) => {
  const [trans, setTrans] = useState([]);
  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    if (getTransactionsList) {
      setTrans(
        getTransactionsList.transactions.map((trans) => {
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
