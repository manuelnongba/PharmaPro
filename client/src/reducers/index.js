import { combineReducers } from "redux";
import userReducer from "./userReducer";
import currentUserReducer from "./currentUserReducer";
import addProductReducer from "./addProductReducer";
import getProductsReducer from "./getProductsReducer";
import findProductReducer from "./findProductReducer";
import transactionsReducer from "./transactionsReducer";
import getTransactionsReducer from "./getTransactionsReducer";

export default combineReducers({
  user: userReducer,
  currentUser: currentUserReducer,
  addProduct: addProductReducer,
  getProducts: getProductsReducer,
  findProduct: findProductReducer,
  transactions: transactionsReducer,
  getTransactions: getTransactionsReducer,
});
