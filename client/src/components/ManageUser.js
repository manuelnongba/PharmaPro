import React from 'react';
import { createUser } from '../actions';
import { connect } from 'react-redux';
import AdminHeader from './AdminHeader';
import styles from '../styles/AdminManage.module.css';

class ManageUsers extends React.Component {
  state = {
    formData: {
      name: '',
      email: '',
      username: '',
      role: 'attendant',
      password: '',
    },
  };

  handleInputChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.formData);
    this.props.createUser(this.state.formData);

    this.setState({
      formData: {
        name: '',
        email: '',
        username: '',
        role: 'attendant',
        password: '',
      },
    });
  };

  render() {
    return (
      <div>
        <AdminHeader />

        <div className={styles.manageuser}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleInputChange}
              placeholder="name"
            />
            <input
              type="email"
              name="email"
              value={this.state.formData.email}
              onChange={this.handleInputChange}
              placeholder="email"
            />
            <input
              type="text"
              name="username"
              value={this.state.formData.username}
              onChange={this.handleInputChange}
              placeholder="username"
            />
            <select
              type="text"
              name="role"
              value={this.state.formData.role}
              onChange={this.handleInputChange}
            >
              <option value="attendant">attendant</option>
              <option value="admin">admin</option>
            </select>
            <input
              type="password"
              name="password"
              value={this.state.formData.password}
              onChange={this.handleInputChange}
              placeholder="password"
            />

            <button type="submit">Add User</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { newUser: state.newUser };
};

export default connect(mapStateToProps, { createUser })(ManageUsers);
