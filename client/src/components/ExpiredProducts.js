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
      console.log(product);
      return (
        <tbody key={product._id}>
          <tr>
            <td>{product.name}</td>
            <td>{product.expiryDate}</td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
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
