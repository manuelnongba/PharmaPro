/* eslint-disable */

export default (state = null, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return action.payload;
    default:
      return state;
  }
};
