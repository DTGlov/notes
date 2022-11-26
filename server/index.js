import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notes.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/notes', notesRoutes);

app.get('/', (req, res) => {
  res.send('Notes API');
});

//using mongodb cloud atlas
//get your atlas connection_url from https://cloud.mongodb.com
const PORT = process.env.PORT || 5500;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
