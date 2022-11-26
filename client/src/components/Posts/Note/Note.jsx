import React, { useContext } from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import { FiEdit } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { SetContext } from '../../../App';
import { deleteNote } from '../../../actions/notesActions';
import moment from 'moment';

export default function Note() {
  const notes = useSelector((state) => state.notesReducer);
  const setCurrentId = useContext(SetContext);
  const dispatch = useDispatch();

  return !notes.length ? (
    <h1 className="text-grey-900">
      No posts available😥. Create a note to begin.{' '}
    </h1>
  ) : (
    <div className="sm:grid sm:grid-cols-2 sm:gap-3">
      {notes &&
        notes.map((note) => (
          <div
            key={note._id}
            className="group mt-3 card flex flex-col rounded-lg shadow-lg p-3 transition bg-black opacity-80 duratiton-100 ease-in transform hover:scale-105"
          >
            <div className="flex justify-between lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer">
              <FiEdit
                color={'#00FF00'}
                onClick={() => setCurrentId(note._id)}
              />
              <TrashIcon
                className="h-5 text-red-800"
                onClick={() => dispatch(deleteNote(note._id))}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <h1 className=" tag text-xl underline">{note.title}</h1>
            </div>
            <div className="flex flex-col mt-3">
              <p className="text-sm mt-2 line-clamp-6">{note.body}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs">created:</p>
              <h2 className="text-xs">{moment(note.createdAt).fromNow()}</h2>
            </div>
            {note.updatedAt && (
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xs">updated:</p>
                <h2 className="text-xs">{moment(note.updatedAt).fromNow()}</h2>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
