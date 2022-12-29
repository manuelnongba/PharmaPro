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

export const logout = () => async (dispatch) => {
  const response = await axios.get("/api/logout");
  console.log(response);

  dispatch({ type: "LOGOUT", payload: response.data });
};

export const addProduct = (formState) => async (dispatch) => {
  const response = await axios({
    method: "POST",
    url: "/api/product",
    data: formState,
  });

  dispatch({ type: "ADD_PRODUCT", payload: response.data });
};

export const getProducts = () => async (dispatch) => {
  const response = await axios.get("/api/products");

  dispatch({ type: "GET_PRODUCTS", payload: response.data });
};

export const searchProduct = (term) => async (dispatch) => {
  const response = await axios.get(`/api/searchproduct/${term}`);

  dispatch({ type: "SEARCH_PRODUCT", payload: response.data });
};

export const addTransactions = (formState) => async (dispatch) => {
  const response = await axios({
    method: "POST",
    url: "/api/transactions",
    data: formState,
  });

  dispatch({ type: "ADD_TRANSACTIONS", payload: response.data });
};

export const getTransactions = () => async (dispatch) => {
  const response = await axios.get("/api/gettransactions");

  dispatch({ type: "GET_TRANSACTIONS", payload: response.data });
};
