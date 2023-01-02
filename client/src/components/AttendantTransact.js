import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions";
import AttendantHeader from "./AttendantHeader";
import { searchProduct } from "../actions";
import { addTransactions } from "../actions";
import ReactToPrint from "react-to-print";
import styles from "../styles/AttendantTransact.module.css";

const AttendantTransact = ({
  getProducts,
  searchProduct,
  products,
  addTransactions,
}) => {
  const [formError, setFormError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");
  const [lists, setLists] = useState("");
  const [removeCount, setRemoveCount] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [formState, setFormState] = useState([]);

  const quantityRef = useRef();
  const selectedProductNameRef = useRef();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value) {
      searchProduct(event.target.value);
    }
  };

  let productNames;

  let price = 0;

  if (products && products.productList) {
    productNames = products.productList.map((prod) => {
      if (result === prod.name) {
        price = prod.price;
      }
      return (
        <p
          key={prod._id}
          onClick={(e) => {
            setSearchTerm(e.target.textContent);

            setResult(e.target.textContent);
          }}
        >
          {prod.name}
        </p>
      );
    });
  }

  if (!searchTerm) {
    productNames = null;
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    if (form.checkValidity() === false) {
      setFormError("All fields are required.");
      return;
    }

    let totalPrice;
    if (quantityRef.current.value) {
      totalPrice = quantityRef.current.value * price;
    }

    setTotalSales(totalSales + totalPrice);

    setRemoveCount(removeCount + 1);

    setLists(
      lists +
        `${removeCount} -- ${result} -- ${quantityRef.current.value}  -- ${totalPrice},`
    );

    setFormState([
      ...formState,
      {
        name: result,
        quantity: quantityRef.current.value,
        sales: totalPrice,
      },
    ]);
  };

  // const onClick = (id, deductedSale) => {
  //   const newLists = lists.split(",").filter((el, i) => i !== id);

  //   const newerLists = newLists.join(",");

  //   setLists(newerLists);
  //   setTotalSales(totalSales - deductedSale);
  // };

  const displayList = lists.split(",").map((list) => {
    let id;
    let name;
    let quantity;
    let sales;
    // let deductedSale;
    if (list) {
      id = list.split(" ")[0] * 1;
      name = list.split(" ")[2];
      quantity = list.split(" ")[4] * 1;
      sales = list.split(" ")[7] * 1;
      console.log(list, id, name, quantity, sales);
      // deductedSale = list.split(" ")[5];
    }
    return (
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{sales}</td>
        </tr>
      </tbody>
    );
  });

  displayList.pop();

  // console.log(displayList[0].props.children);
  let componentRef;

  const divRef = useRef(null);

  useEffect(() => {
    // Attach an event listener to the document that listens for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    // If the user clicks outside the div, hide it
    if (divRef.current && !divRef.current.contains(event.target)) {
      divRef.current.style.display = "none";
    }
  }

  return (
    <div>
      <AttendantHeader />
      <div className={styles.attendanttransact}>
        <div className={styles.searchproduct}>
          <input
            type="text"
            placeholder="search item"
            value={searchTerm}
            onChange={handleChange}
            ref={selectedProductNameRef}
          />

          {productNames ? (
            <div className={styles.searchresult} ref={divRef}>
              {productNames}
            </div>
          ) : null}
        </div>
        <form onSubmit={handleSubmit} className={styles.formtransact}>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={price}
              placeholder="Enter the price"
              required
              readOnly
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              required
              ref={quantityRef}
            />
          </label>
          {formError && <p className="error">{formError}</p>}
          <button type="submit" value="Add Item">
            Add Item
          </button>
        </form>
        <div className={styles.transact}>
          <div ref={(el) => (componentRef = el)} className={styles.saleslist}>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Sales</th>
                </tr>
              </thead>
              {displayList}
            </table>
          </div>
          <h2>GH¢{totalSales}</h2>

          <ReactToPrint
            trigger={() => {
              return <button>Print</button>;
            }}
            onAfterPrint={() => {
              addTransactions(formState);
            }}
            content={() => componentRef}
            documentTitle="Sales Receipt"
            pageStyle="print"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps, {
  getProducts,
  searchProduct,
  addTransactions,
})(AttendantTransact);
