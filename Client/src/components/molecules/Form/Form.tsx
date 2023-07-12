import React from 'react'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button';

const Form = () => {
  function test(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
    <Input
        labelText='Vardas'
        className='is-primary'
        type='text'
        setValue={test}
        value={''}
        placeholder='Vardas'
      />
          <Input
        labelText='Pavardė'
        className='is-primary'
        type='text'
        setValue={test}
        value={''}
        placeholder='Pavardė'
      />
          <Input
        labelText='El.paštas'
        className='is-primary'
        type='email'
        setValue={test}
        value={''}
        placeholder='elektorinisipastas@email.com'
      />
          <Input
        labelText='Amžius'
        className='is-primary'
        type='number'
        setValue={test}
        value={''}
        placeholder='18'
      />
      <Button
        text='Pridėti naują'
        action={test}
        className='is-responsive is-primary modal-trigger'
      />

    </div>
  )
}

export default Form