import * as api from '../api/notesApi';
import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionTypes';
import { toast } from 'react-toastify';

//Action Creators

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();
    dispatch({ type: FETCH_ALL, payload: data.data.notes });
  } catch (error) {
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({ type: CREATE, payload: data.data.note });
    toast.success(data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    console.log(error.response.data.message);
    toast.warn(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const updateNote = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, post);
    dispatch({ type: UPDATE, payload: data.data });
    toast.success(data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteNote(id);
    dispatch({ type: DELETE, payload: id });
    toast.success(data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
