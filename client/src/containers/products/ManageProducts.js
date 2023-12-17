import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import AdminHeader from '../../components/AdminHeader';
import { addProduct } from '../../actions';
import { getProducts } from '../../actions';
import styles from '../../styles/Manage.module.css';
import Button from '../../components/Button';

const AdminManageProducts = ({
  getProducts,
  products,
  addProduct,
  newProduct,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    price: '',
    dosage: '',
    unit: 'mg',
    frequency: '',
    stockCount: '',
    expiryDate: '',
  });
  const [productsList, setProductsList] = useState();

  useEffect(() => {
    getProducts();
  }, [getProducts, newProduct]);

  useEffect(() => {
    if (products && products.products) {
      const itemsList = products.products.map((product) => product.name).sort();

      const items = itemsList.map((product, id) => {
        return <p key={id}>{product}</p>;
      });

      setProductsList(items);
    }
  }, [products]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addProduct(formState);
  };

  return (
    <div>
      <AdminHeader />
      <div className={styles.manage}>
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

          <label htmlFor="stock">Stock Count:</label>
          <input
            type="number"
            id="stockcount"
            name="stockCount"
            value={formState.stockCount}
            onChange={handleChange}
          />

          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="Date"
            id="expiryDate"
            name="expiryDate"
            value={formState.expiryDate}
            onChange={handleChange}
          />

          <Button type="submit" text="Add Item" />
        </form>

        <div className={styles.products}>
          <h2>Products</h2>
          <div className={styles.productslist}>{productsList}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products, newProduct: state.newProduct };
};

export default connect(mapStateToProps, { addProduct, getProducts })(
  AdminManageProducts
);
