import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionTypes';

const reducer = (notes = [], action) => {
  switch (action.type) {
    case DELETE:
      return notes.filter((post) => post._id !== action.payload);
    case UPDATE:
      return notes.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...notes, action.payload];
    default:
      return notes;
  }
};

export default reducer;
