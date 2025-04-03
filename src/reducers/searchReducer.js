import {
    CHANGE_SEARCH_FIELD,
  } from '../actions/actionTypes';
  
const initialState = {
  query: '',
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}

export default listReducer;