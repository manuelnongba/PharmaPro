import React from 'react';
import { connect } from 'react-redux';
import AdminHeader from '../../components/AdminHeader';
import { getProducts } from '../../actions';
import styles from '../../styles/Stock.module.css';

class Stock extends React.Component {
  componentDidMount = () => {
    this.props.getProducts();
  };

  stockTable = () => {
    if (this.props.products && this.props.products.products)
      return this.props.products.products.map((product, i) => {
        return (
          <tbody key={product._id}>
            <tr
              className={i % 2 === 0 ? `${styles.evenrow}` : `${styles.oddrow}`}
            >
              <td>{product.name}</td>
              <td>{product.stockCount}</td>
            </tr>
          </tbody>
        );
      });
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <div className={styles.stocktable}>
          <h2>PHARMA PRO STOCK</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Stock</th>
              </tr>
            </thead>
            {this.stockTable()}
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { getProducts })(Stock);
