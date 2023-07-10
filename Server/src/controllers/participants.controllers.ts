import Participant from '../models/participants.model.js';
import { Request, Response } from 'express';

export const getParticipants = async (_req: Request, res: Response) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const addParticipant = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const participant = new Participant(data);

    const savedParticipant = await participant.save();

    res.status(201).json(savedParticipant);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateParticipant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updatedParticipant = await Participant.findByIdAndUpdate(id, data);
    if (updatedParticipant) {
      res.json(updatedParticipant);
    } else {
      res.status(404).json({ message: 'Participant with given id not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteParticipant = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedParticipant = await Participant.findByIdAndDelete(id);

    if (deletedParticipant) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Participant with given id not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
