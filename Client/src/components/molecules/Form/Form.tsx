/* eslint-disable @typescript-eslint/no-misused-promises */
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { API } from '../../../shared/api';
import { IParticipant } from '../../../shared/api/types';
import { useState } from 'react';
import {
  StyledButtondiv,
  StyledForm,
  StyledPTag,
} from './styles';


interface IFormProps {
  onParticipantAdded: (participant: IParticipant) => void;
}

const Form = ({ onParticipantAdded }: IFormProps) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleAddParticipant = async () => {
    try {
      const participantData: IParticipant = {
        name,
        lastname,
        email,
        age: parseInt(age),
      };

      await API.addParticipant(participantData);

      setName('');
      setLastname('');
      setEmail('');
      setAge('');

      onParticipantAdded(participantData);

      setSuccess(true);
      setError('');
    } catch (error) {
      console.error('Error adding participant:', error);
      setError('Vartotojo pridėti nepavyko. Užpildykite visus laukus!');
    }
  };

  return (
    <div>
      {success ? (
        <StyledPTag className='success-modal'>
          Vartotojas pridėtas sėkmingai!
        </StyledPTag>
      ) : (
        <div>
          {error && (
            <StyledPTag style={{ color: '#f14668' }} className='error-message'>
              {error}
            </StyledPTag>
          )}
          <StyledForm>
            <Input
              labelText='Vardas'
              className='is-primary'
              type='text'
              setValue={setName}
              value={name}
              placeholder='Vardas'
            />
            <Input
              labelText='Pavardė'
              className='is-primary'
              type='text'
              setValue={setLastname}
              value={lastname}
              placeholder='Pavardė'
            />

            <Input
              labelText='El.paštas'
              className='is-primary'
              type='email'
              value={email}
              setValue={setEmail}
              placeholder='El.paštas'
            />
            <Input
              labelText='Amžius'
              className='is-primary'
              type='number'
              value={age}
              setValue={setAge}
              placeholder='Amžius'
            />
          </StyledForm>
          <StyledButtondiv>
            <Button
              text='Pridėti naują'
              action={handleAddParticipant}
              className='is-primary modal-trigger'
            />
          </StyledButtondiv>
        </div>
      )}
    </div>
  );
};

export default Form;
