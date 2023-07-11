import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/db.js';
import {
  getParticipants,
  addParticipant,
  updateParticipant,
  deleteParticipant,
} from './controllers/participants.controllers.js';

const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Starting server
const startServer = () =>
  app.listen(PORT, () => console.log('Staring server on port: ' + PORT));

// Database
connectDatabase(startServer);

// Routes
// -- GET /api/registration/participants - returns registrated participants
app.get('/api/registration/participants', getParticipants);

// -- POST /api/registration/participants - adds new registrated participant
app.post('/api/registration/participants', addParticipant);

// -- PUT //api/registration/participants/:id - updates registrated participant by id
app.put('/api/registration/participants/:id', updateParticipant);

// -- DELETE /api/registration/participants/:id - deletes registrated participant by id
app.delete('/api/registration/participants/:id', deleteParticipant);
