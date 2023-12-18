import React from 'react';
import { connect } from 'react-redux';
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
          <div key={product._id} className={styles.stockitem}>
            <p>{product.name}</p>
            <p>{product.stockCount}</p>
          </div>
        );
      });
  };

  render() {
    return (
      <div>
        <div className={styles.stocktable}>
          <div className={styles.stockheader}>
            <h3>
              <ion-icon name="document-text-outline"></ion-icon>
              <span>Product Name</span>
            </h3>
            <h3>
              <ion-icon name="layers-outline"></ion-icon>
              <span>Stock Count</span>
            </h3>
          </div>
          <div className={styles.stockcontent}>{this.stockTable()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { getProducts })(Stock);
