/* eslint-disable */
import _ from 'lodash';

export default (state = null, action) => {
  switch (action.type) {
    case 'CURRENT_TRANSACTION':
      return action.payload;
    case 'GET_CURRENT_TRANSACTION':
      return action.payload;
    case 'DELETE_TRANSACTION':
      return action.payload;
    default:
      return state;
  }
};
