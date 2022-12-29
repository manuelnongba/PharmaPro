import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { addProduct } from "../actions";
import { getProducts } from "../actions";

const AdminManageProducts = ({ getProducts, products, addProduct }) => {
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    dosage: "",
    unit: "mg",
    frequency: "",
  });
  const [productsList, setProductsList] = useState();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (products && products.message === "success") {
      const items = products.products.map((product) => {
        return <div key={product._id}>{product.name}</div>;
      });

      setProductsList(items);
    }
  }, [products]);

  console.log(formState);

  // Function to handle changes to the form fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to handle submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the drug to the database here...
    addProduct(formState);

    alert("product added!!!");

    window.location.reload();
  };

  return (
    <div>
      <AdminHeader />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formState.price}
          onChange={handleChange}
        />

        <label htmlFor="dosage">Dosage:</label>
        <input
          type="number"
          id="dosage"
          name="dosage"
          value={formState.dosage}
          onChange={handleChange}
        />

        <label htmlFor="unit">Unit:</label>
        <select
          id="unit"
          name="unit"
          value={formState.unit}
          onChange={handleChange}
        >
          <option value="mg">mg</option>
          <option value="g">g</option>
          <option value="ml">ml</option>
          <option value="l">l</option>
        </select>

        <label htmlFor="frequency">Frequency:</label>
        <input
          type="text"
          id="frequency"
          name="frequency"
          value={formState.frequency}
          onChange={handleChange}
        />

        <button type="submit">Add Item</button>
      </form>
      <div>{productsList}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.products };
};

export default connect(mapStateToProps, { addProduct, getProducts })(
  AdminManageProducts
);
