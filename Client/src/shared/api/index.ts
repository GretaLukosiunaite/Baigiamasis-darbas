import axios from 'axios';
import { IParticipant } from './types';

const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 1000,
});

httpClient.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpClient;

class Api_instance {
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

  public async getParticipant(id: string): Promise<IParticipant> {
    const participant: IParticipant = await httpClient.get(
      this.participants + '/' + id
    );

    return participant;
  }

  public async addParticipant(participant: IParticipant) {
    const response = await httpClient.post(this.participants, participant);

    return response;
  }

  public async deleteParticipant(id: string): Promise<IParticipant> {
    const participantDeleted: IParticipant = await httpClient.delete(
      this.participants + '/' + id
    );

    return participantDeleted;
  }
}

export const API = new Api_instance();
