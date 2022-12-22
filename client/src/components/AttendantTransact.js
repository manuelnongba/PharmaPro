import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions";
import AttendantHeader from "./AttendantHeader";
import { searchProduct } from "../actions";
import { addTransactions } from "../actions";
import ReactToPrint, { useReactToPrint } from "react-to-print";

const AttendantTransact = ({
  getProducts,
  searchProduct,
  product,
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

  if (product) {
    productNames = product.product.map((prod) => {
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
    // let deductedSale;
    if (list) {
      id = list.split(" ")[0] * 1;
      // deductedSale = list.split(" ")[5];
    }
    return (
      <h3 key={id}>
        {list}
        {/* <button onClick={() => onClick(id, deductedSale)}>remove</button> */}
      </h3>
    );
  });

  displayList.pop();
  let componentRef;

  console.log(formState);

  return (
    <div>
      <AttendantHeader />
      <form onSubmit={handleSubmit}>
        <label>
          Product:
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            ref={selectedProductNameRef}
          />
          <div>{productNames}</div>
        </label>
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
            placeholder="Enter the quantity"
            required
            ref={quantityRef}
          />
        </label>
        {formError && <p className="error">{formError}</p>}
        <input type="submit" value="Add Item" />
      </form>
      <div ref={(el) => (componentRef = el)}>
        <h3>No -- Name -- Quantity -- Sales </h3>
        {displayList}
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
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    products: state.getProducts,
    product: state.findProduct,
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps, {
  getProducts,
  searchProduct,
  addTransactions,
})(AttendantTransact);
