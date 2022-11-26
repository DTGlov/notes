import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, updateNote } from '../../actions/notesActions';
import { CurrentContext, SetContext } from '../../App';

export default function Form() {
  const currentId = useContext(CurrentContext);
  const setCurrentId = useContext(SetContext);

  const note = useSelector((state) =>
    currentId ? state.notesReducer.find((note) => note._id === currentId) : null
  ); // return only updated posts

  const [noteData, setNoteData] = useState({
    title: '',
    body: '',
  });

  const dispatch = useDispatch();
  const isInvalid = noteData.body.trim() === '' || noteData.body.trim() === '';

  useEffect(() => {
    if (note) setNoteData(note);
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      dispatch(createNote(noteData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setNoteData({
      title: '',
      body: '',
    });
  };

  return (
    <div className="col-span-1 bg-black self-start rounded-md">
      <div className="flex flex-col card w-full p-3 rounded-lg">
        <h1 className="text-center tag font-bold">
          {currentId ? 'Editing' : 'Create'} a Note
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            aria-label="Enter your Title"
            type="text"
            className="w-full p-2 h-12 text-gray-900 text-sm placeholder-gray-800 mt-3 bg-gray-200"
            placeholder="Title"
            value={noteData.title}
            onChange={(e) =>
              setNoteData({ ...noteData, title: e.target.value })
            }
          />
          <textarea
            name="body"
            cols="20"
            rows="5"
            value={noteData.body}
            onChange={(e) => setNoteData({ ...noteData, body: e.target.value })}
            className="w-full p-2 placeholder-gray-900 text-sm text-gray-800 mt-3 bg-gray-200"
            placeholder="Body"
          ></textarea>
          <div className="flex flex-col justify-center mt-3">
            <button
              disabled={isInvalid}
              type="submit"
              className={
                isInvalid
                  ? 'cursor-not-allowed head bg-gray-400 h-12 '
                  : 'head w-full bg-green-400 h-12'
              }
            >
              Post
            </button>
          </div>
        </form>
        <button onClick={clear} className="head h-12 mt-2 bg-red-500 w-full">
          Clear
        </button>
      </div>
    </div>
  );
}
