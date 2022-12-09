/* eslint-disable */

export default (state = null, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};
