import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionTypes';

const reducer = (notes = [], action) => {
  switch (action.type) {
    case DELETE:
      return notes.filter((note) => note._id !== action.payload);
    case UPDATE:
      return notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [action.payload, ...notes];
    default:
      return notes;
  }
};

export default reducer;
