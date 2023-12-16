import axios from 'axios';
import React from 'react';

class ExpiredProducts extends React.Component {
  state = { expiredProducts: [] };

  componentDidMount() {
    axios
      .get('/api/expiredproducts')
      .then((response) =>
        this.setState({ expiredProducts: response.data.expiredProducts })
      );
  }

  expiredProducts = () => {
    return this.state.expiredProducts.map((product) => {
      const date = new Date(product.expiryDate);
      const formattedDate = date.toLocaleDateString('en-GH');

      return (
        <tbody key={product._id}>
          <tr>
            <td>{product.name}</td>
            <td>{formattedDate}</td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Expired Products</h1>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          {this.expiredProducts()}
        </table>
      </div>
    );
  }
}

export default ExpiredProducts;
