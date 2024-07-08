/* eslint-disable @typescript-eslint/default-param-last */
import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch (action.type) {
    case 'TEXT_UPDATE': {
      return action.payload.text;
    }
    case 'TEXT_RESET': {
      return '';
    }
    default:
      return state;
  }
};

export default combineReducers({
  text,
});
