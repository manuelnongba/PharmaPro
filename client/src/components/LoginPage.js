import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../actions";
import PrivateRoutes from "../utils/PrivateRoutes";
import PrivateRoutesAttendant from "../utils/PrivateRoutesAttendant";
import styles from "../styles/LoginPage.module.css";

const Login = (props) => {
  // Declare a new state variable, which we'll call "formData"
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    // Update the formData state with the new values from the input fields
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // TODO: Add code to submit the formData to a server or call an authentication function
    props.getUser(formData);
    try {
      //   const res = await axios({
      //     method: "POST",
      //     url: "/api/login",
      //     data: formData,
      //   });
      // console.log(res);
      // role.push(res);
      // if (res.data.user.role === "admin") {
      //   navigate("/admin/dashboard");
      // } else {
      //   navigate("/attendant/dashboard");
      // }
    } catch (error) {}

    // Clear the form fields after submission
    setFormData({
      username: "",
      password: "",
    });
  };

  useEffect(() => {
    if (!props.user) {
      <div></div>;
    } else if (props.user.user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (props.user.user.role === "attendant") {
      navigate("/attendant/dashboard");
    }
  }, [props, navigate]);

  return (
    <div className={styles.loginpage}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="username"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="password"
        />

        <button type="submit">Login</button>
      </form>
      <PrivateRoutes />
      <PrivateRoutesAttendant />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { getUser })(Login);
