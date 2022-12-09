import React, { useState } from "react";
import { searchProduct } from "../actions";
import { connect } from "react-redux";

const Search = ({ searchProduct, product }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value) {
      searchProduct(event.target.value);
    }
  };

  let productNames;
  console.log(product);
  if (product) {
    productNames = product.product.map((prod) => {
      return (
        <p key={prod._id} onClick={(e) => console.log(e.target.textContent)}>
          {prod.name}
        </p>
      );
    });
  }
  if (!searchTerm) {
    productNames = null;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div>{productNames}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { product: state.findProduct };
};

export default connect(mapStateToProps, { searchProduct })(Search);
