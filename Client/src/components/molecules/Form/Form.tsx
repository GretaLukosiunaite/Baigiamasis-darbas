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
    } catch (error) {
      console.error('Error adding participant:', error);
    }
  };

  return (
    <div>
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
        placeholder='elektorinisipastas@email.com'
      />
      <Input
        labelText='Amžius'
        className='is-primary'
        type='number'
        value={age}
        setValue={setAge}
        placeholder='18'
      />
      <Button
        text='Pridėti naują'
        action={handleAddParticipant}
        className='is-responsive is-primary modal-trigger'
      />
    </div>
  );
};

export default Form;
