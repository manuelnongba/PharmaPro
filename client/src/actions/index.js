import axios from "axios";

export const getUser = (formData) => async (dispatch) => {
  const response = await axios({
    method: "POST",
    url: "/api/login",
    data: formData,
  });

  dispatch({ type: "GET_USER", payload: response.data });
};

export const getLoggedInUser = () => async (dispatch) => {
  const response = await axios.get("/api/user");
  console.log(response);

  dispatch({ type: "CURRENT_USER", payload: response.data });
};
