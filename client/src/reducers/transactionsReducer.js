/* eslint-disable */

export default (state = null, action) => {
  switch (action.type) {
    case "ADD_TRANSACTIONS":
      return action.payload;
    default:
      return state;
  }
};
