import React from 'react';
import { connect } from 'react-redux';
import AdminHeader from './AdminHeader';
import { getProducts } from '../actions';
import styles from '../styles/AdminManage.module.css';

class Stock extends React.Component {
  componentDidMount = () => {
    this.props.getProducts();
  };

  stockTable = () => {
    if (this.props.products)
      return this.props.products.products.map((product) => {
        return (
          <tbody key={product._id}>
            <tr>
              <td>{product.name}</td>
              <td>{product.stockcount}</td>
            </tr>
          </tbody>
        );
      });
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <div>
          <h2>PHARMA PRO STOCK</h2>
          <div>
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { getProducts })(Stock);
