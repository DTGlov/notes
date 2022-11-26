import mongoose from 'mongoose';
import Notes from '../models/notes.schema.js';

//fetching all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find({}).sort({ _id: -1 }).exec();
    res.status(200).json({
      message: 'Notes Fetched Successfully',
      data: { notes },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//creating the post
export const createNote = async (req, res) => {
  const { title, body } = req.body;
  const titleToUpperCase = title.toUpperCase();

  try {
    const findExistingNoteWithTitle = await Notes.findOne({
      title: titleToUpperCase,
    });
    if (findExistingNoteWithTitle)
      return res.status(400).json({
        message: `Note with title already exists.Please use another title.`,
      });

    const note = await Notes.create({
      title: titleToUpperCase,
      body,
    });
    res.status(200).json({
      message: 'Note created successfully',
      data: { note },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// updating the post
export const updateNote = async (req, res) => {
  const { id: _id } = req.params;
  const note = req.body;

  //check if the id exists in the database

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({
      message: 'Note does not exist',
    });

  const updatedNote = await Notes.findByIdAndUpdate(
    _id,
    { ...note, _id, updatedAt: new Date() },
    { new: true }
  );

  res.status(200).json({
    message: 'Note updated successfully',
    data: { updatedNote },
  });
};

//deleting a note
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({
      message: 'Note does not exist',
    });

  await Notes.findByIdAndRemove(id);
  res.status(200).json({
    message: 'Note deleted successfully',
  });
};
