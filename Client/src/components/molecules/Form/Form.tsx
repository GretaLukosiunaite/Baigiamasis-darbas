import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { API } from '../../../shared/api';
import { IParticipant } from '../../../shared/api/types';
import { useState } from 'react';

const Form = () => {
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
      // Clear the form after adding the participant
      setName('');
      setLastname('');
      setEmail('');
      setAge('');

      setSuccess(true);
      setError('');

      // Call the callback function to notify the parent component
      onParticipantAdded(participantData);
    } catch (error) {
      console.error('Error adding participant:', error);
      setError('Vartotojo pridėti nepavyko. Užpildykite visus laukus!');
    }
  };

  return (
    <div>
      {success ? (
        <p className='success-modal'>Vartotojas pridėtas sėkmingai!</p>
      ) : (
        <div>
          {error && <p className='error-message'>{error}</p>}
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
          <Button
            text='Pridėti naują'
            action={handleAddParticipant}
            className='is-responsive is-primary modal-trigger'
          />
        </div>
      )}
    </div>
  );
};

export default Form;
