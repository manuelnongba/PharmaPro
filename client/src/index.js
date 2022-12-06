import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(reduxThunk));

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
