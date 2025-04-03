import {
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE,
    END_SERVICE_EDITING,
  } from '../actions/actionTypes';
  
const initialState = {
  name: '',
  price: '',
  editingMode: {
    state: false,
    index: '',
  }
};
  
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
      return { ...state, ...action.payload };
    case END_SERVICE_EDITING:
      return initialState;
    default:
      return state;
  }
}

export default formReducer;