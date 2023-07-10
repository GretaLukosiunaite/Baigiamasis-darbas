import { Schema, model } from 'mongoose';
const participantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
const Participant = model('participant', participantSchema);
export default Participant;
