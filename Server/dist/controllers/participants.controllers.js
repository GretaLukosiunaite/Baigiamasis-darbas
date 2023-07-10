var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Participant from '../models/participants.model.js';
export const getParticipants = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participants = yield Participant.find();
        res.json(participants);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
export const addParticipant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const participant = new Participant(data);
        const savedParticipant = yield participant.save();
        res.status(201).json(savedParticipant);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
export const updateParticipant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    try {
        const updatedParticipant = yield Participant.findByIdAndUpdate(id, data);
        if (updatedParticipant) {
            res.json(updatedParticipant);
        }
        else {
            res.status(404).json({ message: 'Participant with given id not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
export const deleteParticipant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const deletedParticipant = yield Participant.findByIdAndDelete(id);
        if (deletedParticipant) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: 'Participant with given id not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
