import { combineReducers } from 'redux';
import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';
import productsReducer from './productsReducer';
import addProductReducer from './addProductReducer';
import currentTransactionsReducer from './currentTransactionsReducer';

export default combineReducers({
  user: userReducer,
  transactions: transactionsReducer,
  products: productsReducer,
  newProduct: addProductReducer,
  currentTransactions: currentTransactionsReducer,
});
