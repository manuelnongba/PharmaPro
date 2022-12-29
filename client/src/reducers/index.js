import { combineReducers } from "redux";
import userReducer from "./userReducer";
import transactionsReducer from "./transactionsReducer";
import productsReducer from "./productsReducer";
import addProductReducer from "./addProductReducer";

export default combineReducers({
  user: userReducer,
  transactions: transactionsReducer,
  products: productsReducer,
  newProduct: addProductReducer,
});
