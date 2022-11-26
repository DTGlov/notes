import axios from 'axios';

const url = 'https://notes-backend-deploy.onrender.com/notes';

export const fetchNotes = () => axios.get(url);
export const createNote = (newPost) => axios.post(url, newPost);
export const updateNote = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);
