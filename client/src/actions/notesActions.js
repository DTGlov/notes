import * as api from '../api/notesApi';
import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionTypes';

//Action Creators

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNote = (post) => async (dispatch) => {
  try {
    const { data } = await api.createNote(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await api.deleteNote(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
