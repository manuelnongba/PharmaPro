import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions";
import AttendantHeader from "./AttendantHeader";
import Search from "./Search";

const AttendantTransact = (props) => {
  const [formError, setFormError] = React.useState(null);

  useEffect(() => {
    props.getProducts();
  }, []);

  let productsList;

  if (props.products) {
    productsList = props.products.products.map((product) => {
      return (
        <option key={product._id} onClick={(e) => console.log(e.target)}>
          {product.name}
        </option>
      );
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);

    const form = event.target;
    if (form.checkValidity() === false) {
      setFormError("All fields are required.");
      return;
    }

    // Form is valid, do something with the data, such as
    // sending it to a server.
  }

  return (
    <div>
      <AttendantHeader />
      <Search />
      <form onSubmit={handleSubmit}>
        <label>Product:</label>
        <select
          type="text"
          name="product"
          placeholder="Enter product name"
          required
        >
          {productsList}
        </select>
        <label>
          Price:
          <input
            type="number"
            name="price"
            placeholder="Enter the price"
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            placeholder="Enter the quantity"
            required
          />
        </label>
        {formError && <p className="error">{formError}</p>}
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.getProducts };
};

export default connect(mapStateToProps, { getProducts })(AttendantTransact);
