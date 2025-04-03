import { CHANGE_SEARCH_FIELD } from '../actions/actionTypes';

const initialState = {
  query: '',
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}