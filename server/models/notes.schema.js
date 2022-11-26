import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Notes = mongoose.model('Notes', noteSchema);

export default Notes;
