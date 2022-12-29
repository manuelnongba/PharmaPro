import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { connect } from "react-redux";
import { getTransactions } from "../actions";

const AdminPage = ({ transaction, getTransactions }) => {
  const [trans, setTrans] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [totalSales, setTotalSales] = useState(null);

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    let qSum = 0;
    let sSum = 0;
    if (transaction) {
      setTrans(
        transaction.transactions.map((trans) => {
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
  }, [transaction]);

  return (
    <div>
      <AdminHeader />
      <h2>TRANSACTIONS</h2>
      {trans}
      <div>
        <h2>Total Sales</h2>
        {totalSales}
      </div>
      <div>
        <h2>Total Quantity</h2>
        {totalQuantity}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { transaction: state.transactions };
};

export default connect(mapStateToProps, { getTransactions })(AdminPage);
