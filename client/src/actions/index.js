import axios from 'axios';
import { showAlert } from '../utils/alert';

export const getUser = (formData) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/login',
      data: formData,
    });

    dispatch({ type: 'GET_USER', payload: response.data });
    showAlert('success', 'Logged In Successfully!');
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const getLoggedInUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/user');

    dispatch({ type: 'CURRENT_USER', payload: response.data });
  } catch (err) {
    // showAlert('error', 'User not found');
  }
};

export const addProduct = (formState) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/product',
      data: formState,
    });

    dispatch({ type: 'ADD_PRODUCT', payload: response.data });
    showAlert('success', 'Product successfully added!');
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } catch (err) {
    if (err.response.data.message.code === 11000)
      showAlert(
        'error',
        `Duplicate field value: ${err.response.data.message.keyValue.name}. Please use another value!`
      );
  }
};

export const getProducts = () => async (dispatch) => {
  const response = await axios.get('/api/products');

  dispatch({ type: 'GET_PRODUCTS', payload: response.data });
};

export const searchProduct = (term) => async (dispatch) => {
  const response = await axios.get(`/api/searchproduct/${term}`);

  dispatch({ type: 'SEARCH_PRODUCT', payload: response.data });
};

export const addTransactions = (formState) => async (dispatch) => {
  const response = await axios({
    method: 'POST',
    url: '/api/transactions',
    data: formState,
  });

  dispatch({ type: 'ADD_TRANSACTIONS', payload: response.data });
};

export const getTransactions = () => async (dispatch) => {
  const response = await axios.get('/api/gettransactions');

  dispatch({ type: 'GET_TRANSACTIONS', payload: response.data });
};

export const currentTransaction = (formState) => async (dispatch) => {
  const response = await axios({
    method: 'POST',
    url: '/api/current-transaction',
    data: formState,
  });

  dispatch({ type: 'CURRENT_TRANSACTION', payload: response.data });
};

export const getCurrentTransactions = () => async (dispatch) => {
  const response = await axios.get('/api/get-current-transactions');

  dispatch({ type: 'GET_CURRENT_TRANSACTIONS', payload: response.data });
};

export const deleteTransaction = (term) => async (dispatch) => {
  await axios.delete(`/api/delete-transaction/${term}`);

  dispatch({ type: 'DELETE_TRANSACTION', payload: term });
};

export const updateStock = (name, quantity) => async (dispatch) => {
  await axios.patch(`/api/updatestock/${name}/${quantity}`);

  dispatch({ type: 'UPDATE_STOCK', payload: name });
};
