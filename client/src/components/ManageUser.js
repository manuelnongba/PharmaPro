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
      role: '',
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

    this.props.createUser(this.state.formData);
  };

  render() {
    return (
      <div>
        <AdminHeader />

        <div className={styles.manage}>
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
            <input
              type="text"
              name="role"
              value={this.state.formData.role}
              onChange={this.handleInputChange}
              placeholder="role"
            />
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
