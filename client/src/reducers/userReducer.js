/* eslint-disable */

export default (state = null, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    case "CURRENT_USER":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
