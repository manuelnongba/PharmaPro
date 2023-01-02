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
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } else if (props.user.user.role === "attendant") {
      navigate("/attendant/dashboard");
    }
  }, [props, navigate]);

  return (
    <div className={styles.loginpage}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        // width="360.000000pt"
        // height="360.000000pt"
        viewBox="0 0 360.000000 360.000000"
        preserveAspectRatio="xMidYMid meet"
        className={styles.icon}
      >
        <g
          transform="translate(0.000000, 0.000000) scale(0.100000, 0.100000)"
          fill="#1c7ed6"
          stroke="currentColor"
        >
          <path
            d="M1440 3005 c-47 -15 -134 -80 -125 -95 3 -4 -1 -10 -9 -13 -28 -11
-46 -96 -47 -226 -1 -163 -12 -317 -22 -328 -5 -4 -113 -11 -240 -14 -188 -4
-240 -9 -271 -23 -55 -23 -108 -65 -100 -78 4 -7 2 -8 -4 -4 -7 4 -22 -14 -38
-46 -25 -49 -27 -61 -26 -163 3 -154 30 -520 44 -579 15 -68 74 -131 139 -151
52 -15 88 -13 309 18 l95 14 -70 11 c-38 6 -117 16 -174 23 -96 11 -107 14
-139 44 -25 23 -35 40 -35 61 2 125 37 611 45 621 5 7 8 16 5 20 -3 4 97 7
221 5 229 -3 297 1 287 18 -3 6 1 7 9 4 25 -10 103 42 134 89 51 77 52 83 52
337 0 204 2 241 16 254 8 9 16 16 17 16 8 2 434 32 517 37 104 6 106 5 137
-21 39 -33 48 -62 64 -199 6 -59 15 -105 18 -101 10 9 30 164 31 232 0 122
-70 200 -195 216 -69 9 -498 36 -554 35 -25 0 -66 -7 -91 -14z"
          />
          <path
            d="M2710 2221 c-30 -6 -24 -8 39 -14 49 -5 87 -15 110 -30 20 -12 40
-21 44 -19 5 1 6 -2 3 -7 -4 -5 -1 -21 5 -35 9 -19 8 -83 -5 -273 -23 -349
-26 -375 -42 -400 -17 -27 5 -25 -275 -23 -261 2 -288 -3 -359 -67 -81 -73
-90 -110 -90 -372 0 -199 -2 -219 -18 -235 -16 -14 -59 -17 -329 -22 -254 -5
-310 -3 -311 8 -1 7 -6 42 -12 78 -14 94 -26 422 -18 516 3 44 14 107 23 140
9 32 17 67 18 77 1 9 5 17 9 17 12 0 38 57 30 65 -4 5 -1 5 6 1 6 -4 12 -4 12
1 1 10 63 77 120 128 25 22 44 43 42 48 -1 5 2 6 8 2 5 -3 33 10 62 30 61 40
60 41 -13 16 -113 -39 -278 -138 -271 -163 1 -5 -2 -7 -7 -4 -13 8 -94 -101
-85 -115 4 -7 3 -9 -3 -6 -13 8 -26 -20 -16 -35 3 -6 1 -8 -5 -4 -15 9 -50
-88 -73 -204 -21 -104 -43 -490 -32 -575 6 -56 36 -127 61 -147 13 -11 14 -11
7 1 -5 10 -4 12 4 7 6 -4 9 -11 6 -16 -3 -5 10 -21 29 -35 64 -49 113 -55 454
-55 297 0 316 1 363 21 27 12 46 26 42 32 -3 6 -1 7 5 3 14 -9 67 47 96 99 20
38 21 55 23 284 1 278 -1 271 82 272 25 0 125 4 221 8 148 7 183 12 228 31 79
34 124 92 142 183 10 51 -28 608 -46 670 -3 9 -10 15 -15 12 -5 -3 -6 0 -3 8
7 19 -38 71 -80 91 -35 16 -118 19 -186 7z"
          />
        </g>
      </svg>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="username"
          minLength="5"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="password"
          minLength="8"
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
