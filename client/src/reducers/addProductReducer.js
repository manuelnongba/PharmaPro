/* eslint-disable */

export default (state = null, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return action.payload;
    case "SEARCH_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};
