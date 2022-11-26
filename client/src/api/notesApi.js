import axios from 'axios';

const url = 'http://localhost:5500/notes';

export const fetchNotes = () => axios.get(url);
export const createNote = (newPost) => axios.post(url, newPost);
export const updateNote = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);
