/* eslint-disable */

export default (state = null, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload;
    default:
      return state;
  }
};
