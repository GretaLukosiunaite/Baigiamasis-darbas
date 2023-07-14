import axios from 'axios';
import { IParticipant } from './types';

const httpClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});

httpClient.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpClient;

class Api_instance {
  [x: string]: any;
  private participants: string;

  constructor() {
    this.participants = '/api/registration/participants';
  }

  public async getParticipants(): Promise<IParticipant[]> {
    const participants: IParticipant[] = await httpClient.get(
      this.participants
    );

    return participants;
  }

  public async getParticipant(_id: string): Promise<IParticipant> {
    const participant: IParticipant = await httpClient.get(
      this.participants + '/' + _id
    );

    return participant;
  }

  public async addParticipant(participant: IParticipant) {
    const response = await httpClient.post(this.participants, participant);

    return response;
  }

  public async updateParticipant(
    _id: string,
    updatedParticipant: IParticipant
  ): Promise<IParticipant> {
    const participantUpdated: IParticipant = await httpClient.put(
      this.participants + '/' + _id,
      updatedParticipant
    );

    return participantUpdated;
  }

  public async deleteParticipant(_id: string): Promise<IParticipant> {
    const participantDeleted: IParticipant = await httpClient.delete(
      this.participants + '/' + _id
    );

    return participantDeleted;
  }
}

export const API = new Api_instance();
