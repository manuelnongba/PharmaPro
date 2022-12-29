/* eslint-disable */

export default (state = null, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    case "SEARCH_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};
